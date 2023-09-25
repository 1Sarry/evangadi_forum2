const mysql = require("mysql2/promise"); // promise--- callback, promise object, async-await

// we prefer createPool method for high traffic websites, it creates pool of connections insteas of one connection
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
});

module.exports = { pool };
