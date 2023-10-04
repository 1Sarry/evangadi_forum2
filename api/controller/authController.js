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
    let savedUser = await pool.query(
      "INSERT INTO user (firstName, lastName, email, password) VALUES (?,?,?,?)",
      [firstName, lastName, email, hashedPassword]
    );
    let userId = savedUser[0].insertId;
    // console.log (savedUser[0].insertId);
    // Signing access token
    let user = {
      firstName,
      lastName,
      email,
      userId,
    };
    let token = jwt.sign(user, process.env.TOKEN_SECRET, { expiresIn: "3d" });

    res.status(201).json({
      status: true,
      message: "Successfully Signed Up",
      accessToken: token,
      user: user,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ status: false, message: "Something went wrong" });
  }
};

// LogIn

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

    // Authenticate a user by comparing his password when loging in

    let user = findUser[0][0];
    let { password: p, ...other } = user;
    console.log(other);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(403).json({
        status: false,
        message: "Invalid email or password",
      });
    }

    let token = jwt.sign(other, process.env.TOKEN_SECRET, { expiresIn: "3d" });

    res.status(201).json({
      status: true,
      message: "Successfully Logged In",
      accessToken: token,
      user:other,
    });
    // console.log(user);
    // console.log(findUser);
    //res.send("Checking");
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ status: false, message: "Something went wrong" });
  }
};

// Token

const protect = async (req, res, next) => {
  let token;
  if (!req.headers.authorization) {
    return res
      .status(403)
      .json({ status: false, message: "You are not logged in" });
  }
  token = req.headers.authorization.split(" ")[1];
  // console.log(token);
  // res.send("testing...");

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    if (!decoded) {
      return res.status(403).json({
        status: false,
        message: "You are not logged in or invalid token",
      });
    }
    req.user = decoded;
    // console.log(decoded);
    next();
    console.log(decoded);
  } catch (error) {
    return res.status(403).json({
      status: false,
      message: "Invalid token or Token Expired",
    });
  }
};

module.exports = { signUp, logIn, protect };
