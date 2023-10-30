const { pool } = require("../Config/db");

const postAnswer = async (req, res) => {
  let userId = req.user.userId;
  let questionId = req.params.questionId;
  const { answer, answerCodeBlock } = req.body;
  if (!answer) {
    return res
      .status(404)
      .json({ status: false, message: "Missing Required Field" });
  }
  try {
    await pool.query(
      `INSERT INTO answer(answer, answerCodeBlock, userId, questionId) VALUES (?,?,?,?)`,
      [answer, answerCodeBlock, userId, questionId]
    );
    res
      .status(201)
      .json({ status: true, message: "Answer posted successfully" });
  } catch (err) {
    console.log(err.message);
    res
      .status(500)
      .json({ status: false, message: "Something went wrong on the answer " });
  }
};

const getAllAnsewersAlongWithTheirQuestion = async (req, res) => {
  const questionId = req.params.questionId;
  try {
    let answersAndQuestion = await pool.query(
      `SELECT answer, answerCodeBlock, answerId, firstName, lastName, email, question FROM answer JOIN question ON question.questionId=answer.questionId JOIN user ON user.userId=answer.userId WHERE answer.questionId='${questionId} ORDER BY answerId DESC' `
    );
    res.status(201).json({
      status: true,
      total: answersAndQuestion[0].length,
      answers: answersAndQuestion[0],
    });
  } catch (err) {
    console.log(err.message);
    res
      .status(500)
      .json({
        status: false,
        message:
          "Something went wrong while finding all answers and the question",
      });
  }
};
module.exports = { postAnswer, getAllAnsewersAlongWithTheirQuestion };
