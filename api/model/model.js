// Creating the Tables - to write the sql queries

const userTable = `CREATE TABLE IF NOT EXISTS user(
    userId INT NOT NULL AUTO_INCREMENT,
    firstName VARCHAR(255) NOT NULL, 
    lastName VARCHAR(255) NOT NULL, 
    email VARCHAR(255) NOT NULL, 
    password VARCHAR(255) NOT NULL, 
    PRIMARY KEY (userId)
    )`;
const questionTable = `CREATE TABLE IF NOT EXISTS question(
        questionId INT NOT NULL AUTO_INCREMENT,
        question VARCHAR(255) NOT NULL, 
        questionDescription VARCHAR(255) NOT NULL, 
        questionCodeBlock VARCHAR(255) NOT NULL, 
        tags VARCHAR(255) NOT NULL, 
        userId INT NOT NULL,
        PRIMARY KEY (questionId),
        FOREIGN KEY (userId) REFERENCES user(userId)
        )`;
const answerTable = `CREATE TABLE IF NOT EXISTS answer(
            answerId INT NOT NULL AUTO_INCREMENT,
            answer VARCHAR(255) NOT NULL,
            answerCodeBlock VARCHAR(255) NOT NULL,
            userId INT NOT NULL,
            questionId INT NOT NULL,
            PRIMARY KEY ( answerId),
            FOREIGN KEY (userId) REFERENCES user(userId),
            FOREIGN KEY (questionId) REFERENCES question(questionId)
            )`;

module.exports = { userTable, questionTable, answerTable };
