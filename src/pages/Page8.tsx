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
import IMG_DEADLOCK_DETEC from "../assets/images/deadlock_detec.png";
import IMG_S2PL from "../assets/images/s2pl.png";


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
        <PageSection>
            <ExampleH3>Strict 2 Phase Lock Execution Schedule</ExampleH3>
            <Image src={IMG_S2PL}/>
            <InfoH3>
                Lock Table
            </InfoH3>
            An entry for each object that is currently locked.
            <ul>
                <li>Pointer to the queue of granted locks (or simply the number of transactions currently holding a lock).</li>
                <li>Type of lock held (shared or exclusive).</li>
                <li>Pointer to the queue of lock requests (waiting transactions).</li>
                <li>A transaction <code>T</code> only contains one lock per object. If <code>T</code> has <code>S</code> on an object and requests <code>X</code> on the same object, then <code>S</code> can be upgraded to <code>X</code> (might have to wait/block for other transactions to release <code>S</code> on the object).</li>
            </ul>
            <InfoBox>
                <p>
                    The transaction table contains a pointer to a list of locks held by each transaction T in the schedule.
                </p>
            </InfoBox>
            <InfoH3> Deadlocks </InfoH3>
            A cycle of transactions waiting for locks to be released by each other. In such a situation, none of the stuck transactions can execute further operations.
            <HowToH3>Detect Deadlocks</HowToH3>
                    Deadlocks can be detected by detecting cycles in the <strong>wair-for graph</strong>, which can be <strong>generated for any timestamp in the execution schedule</strong>.
                            In a wait-for graph:
                            <ul>
                                <li>Transactions are represented as nodes.</li>
                                <li><Latex>There is an edge from $\rm T_i$ to $\rm T_j$ if $\rm T_i$ is waiting for $\rm T_j$ to release a lock.</Latex></li>
                            </ul>
            <Image src={IMG_DEADLOCK_DETEC}/>
            A solution to get out of a deadlock situation is to <strong>abort one of the transactions stuck in the deadlock</strong>. The transaction to abort can be chosen <strong>randomly</strong> or using some <strong>other heuristics</strong> such as the youngest transaction, etc.
        </PageSection>
      </PageColumns>
    </A4Paper>
  );
};
