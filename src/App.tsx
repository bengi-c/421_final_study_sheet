import React, { useState } from 'react'
import './App.css'
import {Page1} from "./pages/Page1";
import {FaChartLine, FaGithub, FaHeart, FaReact, FaYoutube} from "react-icons/fa";
import {Footer} from "./components/Layout";
import {SiOcaml} from "react-icons/si";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <h2>
            COMP421 Final Exam Cheat Sheet
        </h2>
        <p>
            Built with <FaHeart/> by <a href="https://sasharesume.com">Sasha</a>. Contributions welcome on <a href="https://github.com/TheBigSasha/421_final_study_sheet"><FaGithub/> GitHub </a>.
        </p>
        <div style={{height: 25}}></div>
        <h1>Page 1</h1>
      <Page1/>
        <h1>Page 2</h1>
        <Page1/>

        <Footer>
            <a href="https://thebigsasha.github.io/COMP302StudySheet/"><SiOcaml/> COMP302 Exam</a> <a href={"https://github.com/TheBigSasha/RuntimeTester"}><FaChartLine/> Runtime Tester</a> <a href={"https://www.youtube.com/@CS250"}> <FaYoutube> </FaYoutube> COMP 250</a> <a href={"https://www.npmjs.com/package/tbsui"}><FaReact/> React Components</a>
        </Footer>
    </div>
  )
}

export default App
