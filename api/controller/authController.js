const { pool } = require("../Config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Sign Up

const signUp = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res.status(404).json({
      status: false,
      message: "Missing required fields",
    });
  }
  try {
    let existingUser = await pool.query(
      `SELECT * FROM user WHERE email='${email}'`
    );
    //console.log(existingUser);
    if (existingUser[0].length != 0) {
      return res
        .status(400)
        .json({ status: false, message: "user already exists" });
    }

    // Hashing the password
    const salt = await bcrypt.genSalt(10);
    // console.log(salt)
    const hashedPassword = await bcrypt.hash(password, salt);
    // console.log(password)
    // console.log(hashedPassword )
    //  res.send("Checking the salt")
    await pool.query(
      "INSERT INTO user (firstName, lastName, email, password) VALUES (?,?,?,?)",
      [firstName, lastName, email, hashedPassword]
    );

    // Signing access token
    let user = {
      firstName,
      lastName,
      email,
    };
    let token = jwt.sign(user, process.env.TOKEN_SECRET);

    res.status(201).json({
      status: true,
      message: "Successfully Signed Up",
      accessToken: token,
    });
  } catch (error) {}
};

const logIn = async (req, res) => {
  let { email, password } = req.body;

  if (!email || !password) {
    return res.status(404).json({
      status: false,
      message: "Missing required fields",
    });
  }
  try {
    let findUser = await pool.query(`SELECT * FROM user WHERE email = ?`, [
      email,
    ]);
    let user = findUser[0][0];
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(403).json({
        status: false,
        message: "Invalid email or password",
      });
    }
    console.log(user);
    // conso le.log(findUser);
    res.send("Checking");
  } catch (error) {}
};

module.exports = { signUp, logIn };
