import { A4Paper, Image } from "../components/Paper";
import React from "react";
import { PageHeader } from "../components/PageHeader";
import { Java, SQL } from "../components/Code";
import {
  Callout,
  LeftRight,
  PageColumns,
  PageSection,
} from "../components/Layout";
import { BASIC_JAVA_EXAMPLE, BASIC_SQL_EXAMPLE } from "../assets/Code";
import { KeyValue, NoKey, YesKey } from "../components/KeyValue";
import Latex from "react-latex-next";
import "katex/dist/katex.min.css";
import { FaGithub } from "react-icons/fa";

import ImgER1 from "../assets/images/er-1.png";
import {LatexSymbol} from "../components/Latex";

export const Page1: React.FC<{}> = () => {
  return (
    <A4Paper>
      <PageHeader>
        <span>Page 1 - Intro, ER Modeling, Relational Model</span>
        <span>
          <FaGithub />
          /TheBigSasha
        </span>
      </PageHeader>
      <PageColumns>
        <PageSection>
          <h3>Entities & Relationships</h3>
          <YesKey>Entity == Class == Table</YesKey>
          <YesKey>Relationship == Association == Foreign Key</YesKey>
          <p>Constraints</p>
          <KeyValue value={"Overlap"}>
            1 entity belong to 2+ subclasses
          </KeyValue>
          <KeyValue value={"Covering"}>
            Must an entity belong to a subclass?
          </KeyValue>
          <h3>Relationships</h3>
          <KeyValue value={"ISA / is a"}>
            Subclass == Child Class == Child Table
          </KeyValue>
          <KeyValue value={"Many:Many"}>
            Relationship identified by primary keys of constituents, in a join
            table.
          </KeyValue>
          <YesKey>Many to many bidirectional</YesKey>
          <KeyValue value={"One:Many"}>
            Like many to many, but includes a key constraint preventing one of
            the sides from having many mapping. Example: politicians in
            political parties.
          </KeyValue>
          <NoKey>One to many bidirectional</NoKey>
          <KeyValue value={"One:One"}>
            Like one to many, but the key constraint applies to both sides.
            Example: a person has one passport.
          </KeyValue>
          <YesKey>One to one bidirectional</YesKey>
          <Callout>
            In a nutshell, key constraint (arrow) ⇒ at most one; participation
            constraint (thick line) ⇒ at least once. The affected entity set is
            joined to the relationship by the appropriate notation.
          </Callout>
          <Image src={ImgER1} alt={"ER Diagram"} />
          <h3>Symbol Glossary</h3>
          <KeyValue value={"Entity"}>Rectangle</KeyValue>
            <KeyValue value={"Relationship"}>Diamond</KeyValue>
            <KeyValue value={"ISA"}>Triangle</KeyValue>
            <KeyValue value={"Participation"}>Thick Line</KeyValue>
            <KeyValue value={"Key"}>Arrow</KeyValue>
            <KeyValue value={"Weak"}>Dashed Line</KeyValue>
            <KeyValue value={"Derived"}>Dotted Line</KeyValue>
            <KeyValue value={"Identifying"}>Double Line</KeyValue>
          <Callout>
            relation = table; instances = rows; columns = attributes
          </Callout>
          <Callout>
            A schema can be considered an entity set, while an instance is comparable to an entity.
          </Callout>
          <h3>Schemas & Relation</h3>
          - **Schema**: specifies the name of the relation, plus a set of attributes along with their domain/data type.
          - Example: `Students(sid: int, name: string, login:string, faculty: string, major:string)`.
          <KeyValue value={"defines the schema of a relational database."}>
            Data Definition Language (DDL)
          </KeyValue>
          <KeyValue value={"manipulates the data i.e., the rows of the relation. (CURD)"}>
            Data Manipulation Language (DML)
          </KeyValue>
          <Callout>
            Being a data-centric language means that it is independent of the physical/file format the data is stored in. The querying syntax remains the same. It’s like an abstraction.
          </Callout>
        </PageSection>
        <PageSection>
          <h2>Tech Testing</h2>
          <h3><LatexSymbol symbol={"LaTeX"}/></h3>
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
          <caption>The image above depicts a relationship between a class and itself, including the constraint that a company may only spin off from one parent company, but one parent may have many spinoffs.</caption>
        </PageSection>
      </PageColumns>
    </A4Paper>
  );
};
