import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Questions from "../../components/Questions/Questions";
import { AuthContext } from "../../components/Authv1/AuthContext";
import { axiosInstance, endPoint } from "../../endPoint/api";
import Cookies from "js-cookie";
const Home = () => {
  const { state } = useContext(AuthContext);
  const [questions, setQuestions] = useState([]);
  //console.log(state.user?.firstName);

  useEffect(() => {
    const token = Cookies.get("accessToken");
    axiosInstance.get(endPoint.QUESTIONS, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      })
      .then((res) => {
      console.log(res.data);
        setQuestions(res.data.questions);
      })
      .catch((err) => {
        console.error(err.stack); 
      });
  }, []);
  return (
    <>
      <Header />
      <section className="bg-body-tertiary">
        <div className="d-flex justify-content-around py-5 ">
          <button className="btn btn-primary action-btn px-5">
            {" "}
            Ask Question
          </button>
          <p className="fw-semibold">
            <span className="text-warning">Welcome, </span>
            {state?.user?.firstName}
          </p>
        </div>
        <div className="container">
          <h2 className="pb-3">Questions</h2>
          {questions?.map((questionss) => {
            return (
              <Questions
                key={questionss.questionId}
                id={questionss.questionId}
                firstName={questionss.firstName}
                lastName={questionss.lastName}
                question={questionss.question}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
