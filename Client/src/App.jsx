import React from 'react' 
import LandingLayout from './pages/LandingLayout/LandingLayout'
import Home from './pages/Home/Home'
import {Route, Routes} from "react-router-dom"
import Footer from './components/Footer/Footer'
import AskQuestion from './components/Questions/AskQuestion'
import AnswerPost from './components/Questions/AnswerPost'

function App() {
 

  return (
    <>
  <Routes>
    <Route path="/" element={<LandingLayout/>}/>
    <Route path="/home" element={<Home />}/>
    <Route path="/askquestions" element={<AskQuestion/>}/>
    <Route path="/postanswer" element={<AnswerPost/>}/>
  </Routes>
  <Footer/>
    </>
  )
}

export default App
