import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getRoot } from "lexical";
import React from "react";

const TestPlugin = () => {
  const [editor] = useLexicalComposerContext();
  const consoleContent = () => {
    const stringifiedEditorState = JSON.stringify(
      editor.getEditorState().toJSON()
    );
    const parsedEditorState = editor.parseEditorState(stringifiedEditorState);

    const editorStateTextString = parsedEditorState.read(() =>
      $getRoot().getTextContent()
    );
    console.log(editorStateTextString);
  };
  return <button onClick={consoleContent}>click</button>;
};

export default TestPlugin;
