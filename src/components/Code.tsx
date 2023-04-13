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
        fontSize: "85%",
        borderRadius: "1mm",
        padding: "0.5mm",
        boxShadow: "0 0 0.5mm rgba(0, 0, 0, 0.2)",
        margin: "0.5mm 0 0.55mm",
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

export const PigLatin: React.FC<CodeProps> = ({ code }) => (
    <SyntaxHighlight language="piglatin" code={code} />
);
