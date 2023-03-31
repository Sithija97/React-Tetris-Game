import React from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { $getRoot, $createParagraphNode, $createTextNode } from "lexical";
import Editor from "../edtior/Editor";
import { MentionNode } from "../nodes/MentionNode";
import ExampleTheme from "../themes/ExampleTheme";

// Node imports
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";

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

const BodyWrapper = ({ initialValue, setValue }: IProps) => {
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <Editor initialValue={initialValue} setValue={setValue} />
    </LexicalComposer>
  );
};

export default BodyWrapper;
