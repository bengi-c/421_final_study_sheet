import { A4Paper, Image } from "../components/Paper";
import React from "react";
import { PageHeader } from "../components/PageHeader";
import {Java, SQL, TypeScript} from "../components/Code";
import {
    OrderedList,
    PageColumns,
    PageSection, TwoColumn,
} from "../components/Layout";
import {BASIC_JAVA_EXAMPLE, BASIC_SQL_EXAMPLE, SQL_CREATE_INDEX} from "../assets/Code";
import { KeyValue, NoKey, YesKey } from "../components/KeyValue";
import Latex from "react-latex-next";
import "katex/dist/katex.min.css";
import { FaGithub } from "react-icons/fa";
import { LatexSymbol } from "../components/Latex";
import {ExampleH3, HowToH3, Info, InfoH3} from "../components/QuickSymbols";
import {InfoBox, MetaBox, WarningBox} from "../components/ThemedBoxes";
import IMG_EQUI_JOIN from "../assets/images/equi-join.png";
import IMG_RA_MC_EXAMPLE from "../assets/images/ra-mc-example.png";
import IMG_RA_SA_TABLES from "../assets/images/ra-sa-tables.png";
import IMG_HEAPFILE from "../assets/images/heapfile.png";
import IMG_SORTEDFILE from "../assets/images/sortedfile.png";
import IMG_HEAP_FILE_COST from "../assets/images/heap_file_cost.png";
import IMG_SORTED_FILE_COST from "../assets/images/sorted_file_cost.png";
import IMG_BP_TREE from "../assets/images/bp_tree.png";
import IMG_BP_TREE_2 from "../assets/images/bp_tree_2.png";
import IMG_CLUST_OR_NOT from "../assets/images/clust_or_not.png";
import IMG_MULTI_ATTR_IDXING from "../assets/images/multi_attr_idxing.png";
import IMG_SEARCH_BP_TREE from "../assets/images/search_bp_tree.png";
import IMG_SEARCH_BP_TREE_2 from "../assets/images/search_bp_tree_2.png";

export const Page4: React.FC<{}> = () => {
    return (
        <A4Paper>
            <PageHeader>
                <span>Page 4 - Indexing (continued from 3)</span>
                <span>
          <FaGithub />
          /TheBigSasha
        </span>
            </PageHeader>
            <PageColumns>
                <PageSection>
                    <MetaBox>Previous page: B+ trees, indexing types (indirect1/2, direct), indexing definitions, etc.</MetaBox>
                    <InfoH3>Indexing: Additional Attributes</InfoH3>
                    <InfoBox>
                        <p>                    It’s possible to store <strong>additional attributes along with the record’s <code>rid</code> on the leaf page</strong>. It can be seen as a <strong>middle ground between direct and indirect indexing</strong>.</p>
                        <p>Additional attributes are helpful for storing the most commonly accessed attributes (for example, name, etc.). </p>
                    </InfoBox>
                    <YesKey>
                        No additional I/O to fecth the additional attributes
                    </YesKey>
                    <YesKey>
                        Tradeoff: Fewer records per page Thus taller B+ tree
                    </YesKey>

                    <InfoH3>Indexing: Clustered vs !Clustered</InfoH3>
                    <Image src={IMG_CLUST_OR_NOT}/>
                    <TwoColumn>
                        <div>
                            <h4>Clustered</h4>
                            <i>The relation stored on the file is sorted by the search key attribute of the index.</i>
                            The advantage of having a clustered index is that the intermediate and leaf nodes, as well as the actual data, are sorted on the same attribute, making it easier to access successive data. Since the actual data is also sorted, we can quickly access the next N records without looking back at the index, for example.
                        </div>
                        <div>
                            <h4>Unclustered</h4>
                            <i>The relation is stored on a heap file or a file sorted by different attribute(s) than the search key.</i>
                            However, if the actual data were not sorted in the same way as the leaf nodes were, we would have to refer back to the leaf nodes to get the location of the next record in the sorted order of that attribute.
                            Have to access more data pages for ranged searches.
                        </div>
                    </TwoColumn>
                    <WarningBox>
                        <p><h4>ONLY ONE clustered index for any relation.</h4> It’s a design choice to decide which attribute to use to sort the actual data in so as to get the maximum I/O efficiency.
                        </p>
                    </WarningBox>
                    <InfoH3>Indexing: Multiple Attributes</InfoH3>
                    <strong>Just like sorting by multiple attributes IE age, then height</strong>

                    <Image src={IMG_MULTI_ATTR_IDXING}/>
                    <p>It is possible to create an index with more than one attribute. However, the order of indexing matters. The data is first ordered by attribute 1, followed by attribute 2, which is used in cases of ties when comparing by attribute 1, and so on.</p>
                    <InfoBox>
                        <p>The performance benefit from multi-attribute indexing can be leveraged only when the query contains at least attribute 1. </p>
                    </InfoBox>
                    <ExampleH3>Searching B+ Tree</ExampleH3>
                    <Image src={IMG_SEARCH_BP_TREE}/>
                    <Image src={IMG_SEARCH_BP_TREE_2}/>
                </PageSection>
                <PageSection>
                    <HowToH3>Insert Into B+ Tree</HowToH3>
                    <ul>
                        <li><p>Inserting a data entry into a leaf page requires the following steps:</p>
                            <ul>
                                <li>Find the correct leaf page <code>L</code>.</li>
                                <li><p>Put data entry into <code>L</code>.</p>
                                    <ul>
                                        <li>If <code>L</code> has enough space, we’re done!</li>
                                        <li><p>Else, split <code>L</code> into <code>L</code> and a new leaf page <code>L2</code>, followed by redistributing the data entries evenly. <strong>Copy up</strong> the middle key. This is known as a <strong>leaf node split</strong>.</p>
                                            <p>  Insert the index entry pointing to <code>L2</code> into the parent of <code>L</code>. </p>
                                            <p>  This can happen recursively:</p>
                                            <ul>
                                                <li>To split an index node, redistribute entries evenly, but <strong>push up</strong> the middle key (unlike with leaf splits). This is known as <strong>index node split</strong>.</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <InfoBox>
                        <p><h4>On splitting</h4>Note that splitting <em>grows</em> the B+ tree. If there are no index splits (only leaf splits), the tree grows <strong>wider</strong>. In case there are index splits as well, there’s a chance that they may propagate all the way up to the root and grow the tree <strong>one level taller at the top</strong>.
                        </p>
                    </InfoBox>
                    <InfoBox>
                        <p>
                            <h4>Avoid splitting</h4>
                            It’s possible to avoid splitting by redistributing entries. However, it’s not implemented in practice because it’s beneficial to have some extra space in nodes available for future insertions.
                        </p>
                    </InfoBox>


                </PageSection>
            </PageColumns>
        </A4Paper>
    );
};
