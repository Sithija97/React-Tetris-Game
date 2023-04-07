import React from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { $getRoot, $createParagraphNode, $createTextNode } from "lexical";
import { PlainTextEditor } from "../edtior/Editor";
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

  const text = "Sample subject - [One-time password] ";
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

const SubjectWrapper = ({ initialValue, setValue }: IProps) => {
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <PlainTextEditor initialValue={initialValue} setValue={setValue} />
    </LexicalComposer>
  );
};

export default SubjectWrapper;
