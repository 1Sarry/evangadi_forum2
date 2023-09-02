const { pool } = require("../Config/db");

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
    console.log(existingUser);
    if (existingUser[0].length != 0) {
      return res
        .status(400)
        .json({ status: false, message: "user already exists" });
    }
    await pool.query(
      "INSERT INTO user (firstName, lastName, email, password) VALUES (?,?,?,?)",
      [firstName, lastName, email, password]
    );
  } catch (error) {}
};

module.exports = { signUp };
