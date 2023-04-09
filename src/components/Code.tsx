import SyntaxHighlighter from "react-syntax-highlighter";
import React from "react";
import { atomOneLight } from "react-syntax-highlighter/dist/cjs/styles/hljs";

interface RawCodeProps {
  code: string;
}

type CodeProps = React.PropsWithChildren<RawCodeProps>;

interface SyntaxHighlightProps {
  language: string;
  code: string;
}

export const SyntaxHighlight: React.FC<SyntaxHighlightProps> = ({
  language,
  code,
}) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={atomOneLight}
      customStyle={{
        textAlign: "left",
      }}
    >
      {code}
    </SyntaxHighlighter>
  );
};

export const SQL: React.FC<CodeProps> = ({ code }) => (
  <SyntaxHighlight language="sql" code={code} />
);

export const Java: React.FC<CodeProps> = ({ code }) => (
  <SyntaxHighlight language="java" code={code} />
);
