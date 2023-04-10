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
import {LatexSymbol} from "../components/Latex";


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
                    <h3>Meta-terms</h3>
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
                    <h3>Operators (one relation input)</h3>
                    <KeyValue value={"Selection"}>
                        <LatexSymbol symbol={`sigma_{A=B}(R)`}></LatexSymbol>
                        <p>Keep only rows where A = B (filter rows)</p>
                    </KeyValue>
                    <KeyValue value={"Projection"}>
                        <LatexSymbol symbol={`Pi_{a,b,c,\\cdots}(R)`}></LatexSymbol>
                        <p>Keep only columns a, b, c, ... from R (filter cols)</p>
                    </KeyValue>
                    <KeyValue value={"Renaming"}>
                        <LatexSymbol symbol={`rho(A \to B)`}></LatexSymbol>
                        <p>Rename column A to B</p>
                    </KeyValue>
                    <YesKey>Rename Tables</YesKey>
                    <YesKey>Rename Columns</YesKey>
                    <h3>Operators (two relations input)</h3>
                    <KeyValue value={"Cross Product"}>
                        <Latex>{`R \$\\times\$ S`}</Latex>
                    </KeyValue>
                    <p>Cartesian product of R and S (creates a superset of possible combinations, useful to narrow it down after) </p>
                    <KeyValue value={"Join"}>
                        <Latex>{`R \$\\bowtie\$ S`}</Latex>
                    </KeyValue>
                    <p>Cross-product, combined with a selection of attributes from both relations (i.e., some condition)</p>
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
                        An equi-join on all common attributes (i.e., attributes with the same name in both relations)
                    </KeyValue>
                    <h3>Set operators (two relations input)</h3>
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
                    <h3>Rules of Combinations of Operators</h3>
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
            </PageColumns>
        </A4Paper>
    );
}
