import { A4Paper, Image } from "../components/Paper";
import React from "react";
import { PageHeader } from "../components/PageHeader";
import { Java, SQL, TypeScript } from "../components/Code";
import {
  Callout,
  LeftRight,
  PageColumns,
  PageSection,
} from "../components/Layout";
import {
  BASIC_JAVA_EXAMPLE,
  BASIC_SQL_EXAMPLE,
  QUICK_SYMBOLS_USAGE_EXAMPLE,
} from "../assets/Code";
import { KeyValue, NoKey, YesKey } from "../components/KeyValue";
import Latex from "react-latex-next";
import "katex/dist/katex.min.css";
import { FaGithub } from "react-icons/fa";
import { LatexSymbol } from "../components/Latex";

import ImgER1 from "../assets/images/er-1.png";
import { Example, HowTo, Info } from "../components/QuickSymbols";

export const TestPage: React.FC<{}> = () => {
  return (
    <A4Paper>
      <PageHeader>
        <span>
          Page <LatexSymbol symbol={"aleph_0"} /> - Test Page
        </span>
        <span>
          <FaGithub />
          /TheBigSasha
        </span>
      </PageHeader>
      <PageColumns>
        <PageSection>
          <h2>Tech Testing</h2>
          <h3>
            <LatexSymbol symbol={"LaTeX"} />
          </h3>
          <Latex>{`\$\\frac{1}{2}\$ look it's \$\\LaTeX\$ can we render cool math? Sure hope so cause we need to. \$\\text{Red}\\mid\\sigma_{\\text{condition}}(R)\\mid = \\dfrac{\\mid\\sigma_{\\text{condition}}(R)\\mid}{\\mid R \\mid}\$`}</Latex>
          <h3>SQL (syntax highlighting)</h3>
          <SQL code={BASIC_SQL_EXAMPLE} />
          <h3>Java (syntax highlighting)</h3>
          <Java code={BASIC_JAVA_EXAMPLE} />
          <h3>Long Text</h3>
          <p>
            SQL is a standard language for accessing and manipulating databases.
            SQL stands for Structured Query Language. SQL lets you access and
            manipulate databases. SQL became a standard of the American National
            Standards Institute (ANSI) in 1986, and of the International
            Organization for Standardization (ISO) in 1987.
          </p>
          <h3>Key Value / True False</h3>
          <KeyValue value={"SQL"}> Structured Query Language.</KeyValue>
          <YesKey>Java is object oriented</YesKey>
          <NoKey>Haskell is object oritented</NoKey>
          <h3>Callout</h3>
          <Callout>
            SQL is a standard language for accessing and manipulating databases.
            SQL stands for Structured Query Language. SQL lets you access and
            manipulate databases. SQL became a standard of the American National
          </Callout>
          <h3>Images & Captions</h3>
          <Image src={ImgER1} alt={"ER Diagram"} />
          <caption>
            The image above depicts a relationship between a class and itself,
            including the constraint that a company may only spin off from one
            parent company, but one parent may have many spinoffs.
          </caption>
        </PageSection>
        <PageSection>
          <h2>QuickSymbols</h2>
          <h3>
            <Example /> Worked Example
          </h3>
          <p>
            SQL is a standard language for accessing and manipulating databases.
            SQL stands for Structured Query Language. SQL lets you access and
            manipulate databases. SQL became a standard of the American National
          </p>
          <h3>
            <Info /> Information
          </h3>
          <p>
            SQL is a standard language for accessing and manipulating databases.
            SQL stands for Structured Query Language. SQL lets you access and
            manipulate databases. SQL became a standard of the American National
          </p>
          <h3>
            <HowTo /> How To
          </h3>
          <p>
            When writing a section of this study sheet, you can use the library
            of quick symbols to mark sections for glancability.
          </p>
          <TypeScript code={QUICK_SYMBOLS_USAGE_EXAMPLE} />
        </PageSection>
      </PageColumns>
    </A4Paper>
  );
};
