import { A4Paper, Image } from "../components/Paper";
import React from "react";
import { PageHeader } from "../components/PageHeader";
import {
  OrderedList,
  PageColumns,
  PageSection,
  TwoColumn,
} from "../components/Layout";
import { KeyValue, YesKey } from "../components/KeyValue";
import Latex from "react-latex-next";
import "katex/dist/katex.min.css";
import { FaGithub } from "react-icons/fa";
import { ExampleH3, HowToH3, Info, InfoH3 } from "../components/QuickSymbols";
import { InfoBox, MetaBox, WarningBox } from "../components/ThemedBoxes";
import IMG_CLUST_OR_NOT from "../assets/images/clust_or_not.png";
import IMG_MULTI_ATTR_IDXING from "../assets/images/multi_attr_idxing.png";
import IMG_SEARCH_BP_TREE from "../assets/images/search_bp_tree.png";
import IMG_SEARCH_BP_TREE_2 from "../assets/images/search_bp_tree_2.png";
import IMG_STATIC_HASH from "../assets/images/static_hash.png";

export const Page8: React.FC<{}> = () => {
  return (
    <A4Paper>
      <PageHeader>
        <span>Page 8 - Concurrency (2/2), Graph Databases</span>
        <span>
          <FaGithub />
          /TheBigSasha
        </span>
      </PageHeader>
      <PageColumns>
        <PageSection></PageSection>
      </PageColumns>
    </A4Paper>
  );
};
