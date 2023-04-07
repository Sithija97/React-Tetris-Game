import { useState } from "react";
import "./index.scss";
import BodyWrapper from "./wrappers/BodyWrapper";
import SubjectWrapper from "./wrappers/SubjectWrapper";

function App() {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = () => {
    console.log("subject :", subject);
    console.log("body :", body);
  };

  return (
    <div className="App">
      <h1>Rich Text Example</h1>
      <p>Note: this is an experimental build of Lexical</p>

      <SubjectWrapper initialValue="" setValue={setSubject} />
      {/* <BodyWrapper initialValue="" setValue={setBody} /> */}

      <div className="other">
        <button onClick={handleSubmit}>Send email</button>
        <h2>Other Examples</h2>
        <ul>
          <li>
            <a
              href="https://codesandbox.io/s/lexical-plain-text-example-g932e"
              target="_blank"
              rel="noreferrer"
            >
              Plain text example
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
