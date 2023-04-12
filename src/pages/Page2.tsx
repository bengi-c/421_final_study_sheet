import { A4Paper, Image } from "../components/Paper";
import React from "react";
import { PageHeader } from "../components/PageHeader";
import { Java, SQL } from "../components/Code";
import {
    PageColumns,
    PageSection,
} from "../components/Layout";
import { BASIC_JAVA_EXAMPLE, BASIC_SQL_EXAMPLE } from "../assets/Code";
import { KeyValue, NoKey, YesKey } from "../components/KeyValue";
import Latex from "react-latex-next";
import "katex/dist/katex.min.css";
import { FaGithub } from "react-icons/fa";
import { LatexSymbol } from "../components/Latex";
import {HowToH3, Info, InfoH3} from "../components/QuickSymbols";
import {InfoBox, WarningBox} from "../components/ThemedBoxes";

export const Page2: React.FC<{}> = () => {
  return (
    <A4Paper>
      <PageHeader>
        <span>Page 2 - Relational Algebra</span>
        <span>
          <FaGithub />
          /TheBigSasha
        </span>
      </PageHeader>
      <PageColumns>
        <PageSection>
            <InfoH3> Relational Algebra Facts</InfoH3>
            <InfoBox>
              <p>
              Relational Algebra (RA) consists of a set of basic operators. The input consists of one or two relations, each of whose schema is known, and the instance can be arbitrary. <strong>The output is always a single relation</strong>, whose schema depends on the operator and input relations.</p>
            </InfoBox>
            <YesKey>Relational algebra is closed i.e., each operation has input relation(s) and returns a relation. Hence, operators can be composed.</YesKey>
            <NoKey>The existence of a primary key is assumed</NoKey>
            <YesKey>A relation is assumed to be a set (no duplicates)</YesKey>
            <InfoBox>
              <p>
                <strong>Mathematical QLs</strong> form the basis for relational QLs. They are implemented using
                <strong>Relational algebra</strong>: it’s a simple abstraction where a query is a sequence of operations on data. It is very useful for representing execution plans, for example, to describe how a SQL query is executed internally. Concepts from relational algebra are also used to optimize query processing.
                <strong>Relational calculus</strong>: it is more descriptive (Mathematically) and a query describes what the data to be retrieved looks like.
              </p>
            </InfoBox>
          <InfoH3>Meta-terms
          </InfoH3>
          <KeyValue value={"Relation"}>
            <Latex>{`R,S,T,\$\\cdots\$`}</Latex>
            <p>Table</p>
          </KeyValue>
          <KeyValue value={"Tuple"}>
            <Latex>{`A,B,C,\$\\cdots\$`}</Latex>
            <p>Row</p>
          </KeyValue>
          <KeyValue value={"Attribute"}>
            <Latex>{`a,b,c,\$\\cdots\$`}</Latex>
            <p>Column</p>
          </KeyValue>
          <InfoH3>Operators (one relation input)
          </InfoH3>
          <KeyValue value={"Selection"}>
            <LatexSymbol symbol={`sigma_{A=B}(R)`}></LatexSymbol>
            <p>Keep only rows where A = B (filter rows like TS::Filter)</p>
          </KeyValue>
          <KeyValue value={"Projection"}>
            <LatexSymbol symbol={`Pi_{a,b,c,\\cdots}(R)`}></LatexSymbol>
            <p>Keep only columns a, b, c, ... from R (filter cols like TS::Pick)</p>
          </KeyValue>
          <KeyValue value={"Renaming"}>
            <LatexSymbol symbol={`rho(A \to B)`}></LatexSymbol>
            <p>Rename column A to B</p>
          </KeyValue>
          <YesKey>Rename Tables</YesKey>
          <YesKey>Rename Columns</YesKey>
          <InfoH3>
            Operators (two relations input)
          </InfoH3>
          <KeyValue value={"Cross Product"}>
            <Latex>{`R \$\\times\$ S`}</Latex>
          </KeyValue>
          <p>
            Cartesian product of R and S (creates a superset of possible
            combinations, useful to narrow it down after){" "}
          </p>
          <InfoBox>
            <p>
              This operator essentially takes data from multiple tables and pushes it into one, even if it duplicates a lot of info. Example: with a join table, all relationships are put in the table and will have columns with the info of the participants repeated.
            </p>
          </InfoBox>
          <KeyValue value={"Join"}>
            <Latex>{`R \$\\bowtie\$ S`}</Latex>
          </KeyValue>
          <p>
            Cross-product, combined with a selection of attributes from both
            relations (i.e., some condition)
          </p>
          <h4>Join Types</h4>
          <KeyValue value={"Condition / Theta Join"}>
            <Latex>{`For each assignment of \$t_1\$: for each assignment of \$t_2\$: if condition $c$ is true, combine all attribute values of \$t_1\$ and \$t_2\$, and put them as a single row in the output relation. \$R_\\text{out} = R_{\\text{in}_1} \\bowtie_c R_{\\text{in}_2} = \\sigma_c(R_{\\text{in}_1} \\times R_{\\text{in}_2})\$`}</Latex>
          </KeyValue>

          <KeyValue value={"Equi-join"}>
            <Latex>
              {`The schema of the output relation is similar to the schema of cross-product, however, there is only one copy of the attributes for which equality is specified in the condition. \$R_\\text{out} = R_{\\text{in}_1} \\bowtie_{R_{\\text{in}_1}.a_1 = R_{\\text{in}_2}.b_1 \\wedge \\cdots \\wedge R_{\\text{in}_1}.a_n = R_{\\text{in}_2}.b_n} R_{\\text{in}_2}\$`}
            </Latex>
          </KeyValue>

          <KeyValue value={"Natural Join"}>
            An equi-join on all common attributes (i.e., attributes with the
            same name in both relations)
          </KeyValue>
          <InfoH3>Set operators (two relations input)
          </InfoH3>
            <WarningBox>
                <p>To use set operators, relations must have the same number of attributes with the same corresponding data types (names don’t matter and can differ).</p>
            </WarningBox>
          <KeyValue value={"Union"}>
            <Latex>{`R \$\\cup\$ S`}</Latex>
            <p>All tupes in R and/or S</p>
          </KeyValue>
          <KeyValue value={"Intersection"}>
            <Latex>{`R \$\\cap\$ S`}</Latex>
            <p>Keep only tuples in both R and S</p>
          </KeyValue>
          <KeyValue value={"Difference"}>
            <Latex>{`R \$\\setminus\$ S`}</Latex>
            <p>Keep only tuples in R but not S</p>
          </KeyValue>
          <InfoH3>
            Rules of Combinations of Operators
          </InfoH3>
          <KeyValue value={"Associativity"}>
            <Latex>{`\$R_1 \\bowtie (R_2 \\bowtie R_3) = (R_1 \\bowtie R_2) \\bowtie R_3\$`}</Latex>
          </KeyValue>
          <KeyValue value={"Commutativity"}>
            <Latex>{`\$\\Pi_L(\\sigma_c(R)) = \\sigma_c(\\Pi_L(R))\$ <- if \$c\$ only contains attributes of \$L\$.`}</Latex>
          </KeyValue>
          <KeyValue value={"Commutativity"}>
            <Latex>{`\$R_1 \\bowtie R_2 = R_2 \\bowtie R_1\$`}</Latex>
          </KeyValue>
          <KeyValue value={"Idempotence"}>
            <Latex>{`\$\\Pi_{L_2}(\\Pi_{L_1}(R)) = \\Pi_{L_2}(R)\$ only if \$L_2 \\sube L_1\$`}</Latex>
          </KeyValue>
        </PageSection>
          <PageSection>
              <InfoH3>Composition of Operators</InfoH3>
              There are two main ways of doing this:<ul>
                    <li>Using algebra like substitution, creating new relations and sending them to each next operator.</li>
                    <li>Running thru the the first relation, as we go sending passing stuff to the next operator in parallel.</li>
              </ul>


          </PageSection>
      </PageColumns>
    </A4Paper>
  );
};
