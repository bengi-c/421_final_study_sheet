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
                </PageSection>
            </PageColumns>
        </A4Paper>
    );
}
