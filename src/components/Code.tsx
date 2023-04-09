import SyntaxHighlighter from "react-syntax-highlighter";
import React from "react";
import {
  atomOneLight,
  idea,
} from "react-syntax-highlighter/dist/cjs/styles/hljs";

interface RawCodeProps {
  code: string;
}

type CodeProps = React.PropsWithChildren<RawCodeProps>;

export const SQL: React.FC<CodeProps> = ({ code }) => {
  return (
    <SyntaxHighlighter
      language="sql"
      style={atomOneLight}
      customStyle={{
        textAlign: "left",
      }}
    >
      {code}
    </SyntaxHighlighter>
  );
};
