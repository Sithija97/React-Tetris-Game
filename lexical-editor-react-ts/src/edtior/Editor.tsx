import React from "react";

import ExampleTheme from "../themes/ExampleTheme";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";

import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { TRANSFORMERS } from "@lexical/markdown";
import ToolbarPlugin from "../plugins/ToolbarPlugin";
import MentionsPlugin from "../plugins/MentionsPlugin";
import {
  $createParagraphNode,
  $createTextNode,
  $getRoot,
  EditorState,
} from "lexical";
import { MentionNode } from "../nodes/MentionNode";
import TestPlugin from "../plugins/TestPlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import CustomMentionsPlugin from "../plugins/CustomMentionsPlugin";

// import TreeViewPlugin from "./plugins/TreeViewPlugin";
// import ToolbarPlugin from "./plugins/ToolbarPlugin";
// import ListMaxIndentLevelPlugin from "./plugins/ListMaxIndentLevelPlugin";
// import CodeHighlightPlugin from "./plugins/CodeHighlightPlugin";
// import AutoLinkPlugin from "./plugins/AutoLinkPlugin";

function Placeholder() {
  return <div className="editor-placeholder">Enter some rich text...</div>;
}

const prepopulatedRichText = () => {
  const root = $getRoot();
  const paragraph = $createParagraphNode();

  const text =
    "If you have answered the survey, disregard this reminder. You are invited to participate in our survey at the following address:[Link to the survey] Password: If you is not automatically logged in to the survey, you can use the following one-time password: [One-time password] Login page: [Link with one-time password]";
  const parts = text.split(/(\[.*?\])/g);

  parts.forEach((part, i) => {
    if (part.startsWith("[")) {
      const node = $createTextNode(part)
        .toggleFormat("code")
        .setStyle("color: blue;");
      paragraph.append(node);
    } else {
      const node = $createTextNode(part);
      paragraph.append(node);
    }
  });
  root.append(paragraph);
};

// const EMPTY_CONTENT = JSON.stringify(initialSubject);

const editorConfig = {
  namespace: "MyEditor",
  // The editor theme
  theme: ExampleTheme,
  editorState: prepopulatedRichText,
  // Handling of errors during update
  onError(error: any) {
    throw error;
  },
  // Any custom nodes go here
  nodes: [
    HeadingNode,
    ListNode,
    ListItemNode,
    QuoteNode,
    CodeNode,
    CodeHighlightNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    AutoLinkNode,
    LinkNode,
    MentionNode,
  ],
};

interface IProps {
  initialValue: string;
  setValue: (value: string) => void;
}

const RichTextEditor = ({ initialValue, setValue }: IProps) => {
  const [editor] = useLexicalComposerContext();

  const onChange = (editorState: EditorState) => {
    const stringifiedEditorState = JSON.stringify(editorState.toJSON());
    const parsedEditorState = editor.parseEditorState(stringifiedEditorState);
    const editorStateTextString = parsedEditorState.read(() =>
      $getRoot().getTextContent()
    );
    setValue(editorStateTextString);
  };

  return (
    <div className="editor-container">
      <ToolbarPlugin />
      <MentionsPlugin />
      <CustomMentionsPlugin />
      <div className="editor-inner">
        <RichTextPlugin
          contentEditable={<ContentEditable className="editor-input" />}
          placeholder={<Placeholder />}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <AutoFocusPlugin />
        <ListPlugin />
        <LinkPlugin />
        <OnChangePlugin onChange={onChange} />
      </div>
    </div>
  );
};

export { RichTextEditor };

const PlainTextEditor = ({ initialValue, setValue }: IProps) => {
  const [editor] = useLexicalComposerContext();

  const onChange = (editorState: EditorState) => {
    const stringifiedEditorState = JSON.stringify(editorState.toJSON());
    const parsedEditorState = editor.parseEditorState(stringifiedEditorState);
    const editorStateTextString = parsedEditorState.read(() =>
      $getRoot().getTextContent()
    );
    setValue(editorStateTextString);
  };

  return (
    <div className="editor-container">
      <MentionsPlugin />
      <div className="plain-text-wrapper">
        <div className="editor-inner">
          <PlainTextPlugin
            contentEditable={<ContentEditable className="editor-input" />}
            placeholder={<Placeholder />}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />
          <AutoFocusPlugin />
          <ListPlugin />
          <LinkPlugin />
          <OnChangePlugin onChange={onChange} />
        </div>
        <TestPlugin />
      </div>
    </div>
  );
};

export { PlainTextEditor };
