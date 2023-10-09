import React from 'react' 
import LandingLayout from './pages/LandingLayout/LandingLayout'
import Home from './pages/Home/Home'
import {Route, Routes} from "react-router-dom"

function App() {
 

  return (
    <>
  <Routes>
    <Route path="/" element={<LandingLayout/>}/>
    <Route path="/home" element={<Home />}/>
    
  </Routes>
     
    </>
  )
}

export default App
