import React, { useState } from "react";
import "./App.css";
import { Page1 } from "./pages/Page1";
import {
  FaChartLine,
  FaGithub,
  FaHeart,
  FaPrint,
  FaQuestionCircle,
  FaReact,
  FaYoutube,
} from "react-icons/fa";
import { Footer, LeftRight } from "./components/Layout";
import { SiOcaml } from "react-icons/si";
import { Modal } from "./components/Modal";
import { KeyValue, NoKey, YesKey } from "./components/KeyValue";
import { Page2 } from "./pages/Page2";
import { TestPage } from "./pages/TestPage";
import { Page3 } from "./pages/Page3";
import { Page4 } from "./pages/Page4";
import { Page5 } from "./pages/Page5";
import { Page6 } from "./pages/Page6";
import { Page7 } from "./pages/Page7";
import { Page8 } from "./pages/Page8";

function App() {
  const [showHelp, setShowHelp] = useState(false);

  return (
    <div className="App">
      {showHelp && (
        <Modal
          onClose={() => {
            setShowHelp(false);
          }}
          title={"Printing"}
        >
          <p>
            When printing, please use the following settings to avoid errors.
          </p>
          <KeyValue value={"Letter (8.5in x 11in)"}>Page Size</KeyValue>
          <KeyValue key={"Margins"} value={"None (0px)"}>
            Margins
          </KeyValue>
          <KeyValue key={"Orientation"} value={"Portrait"}>
            Orientation
          </KeyValue>
          <KeyValue key={"Scaling"} value={"None (100%)"}>
            Scaling
          </KeyValue>
          <NoKey key={"Headers and Footers"}>Headers & Footers</NoKey>
          <YesKey key={"Background Graphics"}>Background Graphics</YesKey>
          <p>
            This site is only tested in <i>Google Chrome</i>. Other browsers may
            work, but you are likely to experience problems.{" "}
            <strong>
              When printing correctly, the header IE "Page 1..." should be at
              the top of each page, and fill its width entirely.
            </strong>
          </p>
        </Modal>
      )}
      <LeftRight className={"no-print"}>
        <h2>COMP421 Final Exam Cheat Sheet</h2>
        <span>
          <FaQuestionCircle
            onClick={() => {
              setShowHelp(!showHelp);
            }}
            title={"Help & Info about printing"}
            style={{ cursor: "pointer", marginRight: 10 }}
          ></FaQuestionCircle>
          <button
            onClick={() => {
              // print as Letter, no margin, portrait
              window.print();
            }}
          >
            <FaPrint></FaPrint> Print
          </button>
        </span>
      </LeftRight>

      <p>
        Built with <FaHeart /> by <a href="https://sasharesume.com">Sasha</a>.
        Contributions welcome on{" "}
        <a href="https://github.com/TheBigSasha/421_final_study_sheet">
          <FaGithub /> GitHub{" "}
        </a>
        .
      </p>
      <div style={{ height: 25 }}></div>
      <h1>Page 1</h1>
      <Page1 />
      <h1>Page 2</h1>
      <Page2 />
      <h1>Page 3</h1>
      <Page3 />
      <h1>Page 4</h1>
      <Page4 />
      <h1>Page 5</h1>
      <Page5 />
      <h1>Page 6</h1>
      <Page6 />
      <h1>Page 7</h1>
      <Page7 />
      <h1>Page 8</h1>
      <Page8 />

      <h1>Test Page</h1>
      <TestPage />

      <div style={{ height: 25 }}></div>
      <p style={{ maxWidth: "8.5in" }}>
        {" "}
        Including infromation from{" "}
        <a
          href={
            "https://sarvasvarora.notion.site/0ded2d57df4d49dcb06e2fc4a834df56?v=0fb12fd38b684150991d4f565bb19a4a"
          }
        >
          notes by Sarvasv Arora
        </a>
        , content from McGill University's COMP421, and contributions made on
        GitHub.
      </p>

      <Footer className={"no-print"}>
        <a href="https://thebigsasha.github.io/COMP302StudySheet/">
          <SiOcaml /> COMP302 Exam
        </a>{" "}
        <a href={"https://github.com/TheBigSasha/RuntimeTester"}>
          <FaChartLine /> Runtime Tester
        </a>{" "}
        <a href={"https://www.youtube.com/@CS250"}>
          {" "}
          <FaYoutube> </FaYoutube> COMP 250
        </a>{" "}
        <a href={"https://www.npmjs.com/package/tbsui"}>
          <FaReact /> React Components
        </a>
      </Footer>
    </div>
  );
}

export default App;
