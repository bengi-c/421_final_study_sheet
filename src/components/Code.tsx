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
        width: "100%",
        maxWidth: "2.83in",
        lineBreak: "anywhere",
        overflowWrap: "anywhere",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word",
        fontSize: "75%",
      }}
      wrapLines={true}
      wrapLongLines={true}
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

export const TypeScript: React.FC<CodeProps> = ({ code }) => (
  <SyntaxHighlight language="typescript" code={code} />
);
