const express = require("express");
require("dotenv").config(); // to add the environment variables we created on the .env file to node's internal env. var..
const server = express();
const { pool } = require("./Config/db");
const { userTable, questionTable, answerTable } = require("./model/model");
const authRouter = require("./router/authRouter");

// PORT
let port = process.env.PORT || 5500;
// console.log(process.env)
//  console.log(process.env.PORT)

// middleware
server.use(express.json()); // to parse the json data which is sent from the body

// Routers
server.use("/api/v1", authRouter);

const startApp = async (port) => {
  // Establishing the connections
  // We want the database to connect first and then server starts since our app is highly dependent on The DB
  //So create the connection first - await -
  const connection = await pool.getConnection();
  console.log("Database Connection Established!");
  try {
    // Creating the tables
    await connection.query(userTable);
    await connection.query(questionTable);
    await connection.query(answerTable);
    console.log("Tables Successfully Created!");

    // starting the server
    server.listen(port, console.log(`Server is Running on port ${port}`));
    //console.log(process.env.PORT);
  } catch (err) {
    console.log(err.message);
    connection.release(); // stop the connection
  }
};
startApp(port);
