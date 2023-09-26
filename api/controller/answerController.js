const { pool } = require("../Config/db");

const postAnswer = async (req, res) => {
  let userId = req.user.userId;
  let questionId = req.params.questionId
  const { answer, answerCodeBlock } = req.body;
  if (!answer) {
    return res
      .status(404)
      .json({ status: false, message: "Missing Required Field" });
  }
  try {
    await pool.query(`INSERT INTO answer(answer, answerCodeBlock, userId, questionId)`)
  } catch (error) {
    
  }
};
