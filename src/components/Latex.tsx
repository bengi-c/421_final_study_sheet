import Latex from "react-latex-next";
import React from "react";

export const LatexSymbol: React.FC<{ symbol: string }> = ({ symbol }) => {
  return <Latex>{`\$\\${symbol}\$`}</Latex>;
};
