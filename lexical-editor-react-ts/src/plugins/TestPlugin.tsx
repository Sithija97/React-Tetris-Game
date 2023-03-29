import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import React from "react";

const TestPlugin = () => {
  const [editor] = useLexicalComposerContext();
  const consoleContent = () => {
    console.log(
      editor.getEditorState().toJSON().root.children.values().next().value
        .children[0].text
    );
  };
  return <button onClick={consoleContent}>click</button>;
};

export default TestPlugin;
