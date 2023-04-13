import { A4Paper, Image } from "../components/Paper";
import React from "react";
import { PageHeader } from "../components/PageHeader";
import {Java, SQL, TypeScript} from "../components/Code";
import {
    OrderedList,
    PageColumns,
    PageSection, TwoColumn,
} from "../components/Layout";
import { BASIC_JAVA_EXAMPLE, BASIC_SQL_EXAMPLE } from "../assets/Code";
import { KeyValue, NoKey, YesKey } from "../components/KeyValue";
import Latex from "react-latex-next";
import "katex/dist/katex.min.css";
import { FaGithub } from "react-icons/fa";
import { LatexSymbol } from "../components/Latex";
import {ExampleH3, HowToH3, Info, InfoH3} from "../components/QuickSymbols";
import {InfoBox, WarningBox} from "../components/ThemedBoxes";
import IMG_EQUI_JOIN from "../assets/images/equi-join.png";
import IMG_RA_MC_EXAMPLE from "../assets/images/ra-mc-example.png";
import IMG_RA_SA_TABLES from "../assets/images/ra-sa-tables.png";
import IMG_HEAPFILE from "../assets/images/heapfile.png";
import IMG_SORTEDFILE from "../assets/images/sortedfile.png";


export const Page3: React.FC<{}> = () => {
    return (
        <A4Paper>
            <PageHeader>
                <span>Page 3 - Buffer Management</span>
                <span>
          <FaGithub />
          /TheBigSasha
        </span>
            </PageHeader>
            <PageColumns>
                <PageSection>

                <InfoH3>Hardware Facts</InfoH3>
            <KeyValue value={"DISK BLOCK / PAGE"}>
                A unit of data that is read or written to disk at a time.
            </KeyValue>
            <InfoBox>
                <p>
                    All changes to data must be made <strong>in memory</strong>, meaning that it requires a disk read and a disk write to make a change.
                </p>
            </InfoBox>
            <KeyValue value={"2-10ms"}>
                Time to read a random disk block (HDD, with seek time)
            </KeyValue>
            <KeyValue value={"+1 ms per sequential block"}>
                Time to read a sequential disk block (HDD, with seek time)
            </KeyValue>
            <KeyValue value={"~1ns"}>
                Time to read from RAM
            </KeyValue>
            <KeyValue value={"0.1ms"}>
                SSD read time
            </KeyValue>
            <InfoH3>Terminology</InfoH3>
            <KeyValue value={"Hot Data"}>
                Data that is frequently accessed
            </KeyValue>
            <KeyValue value={"Cold Data"}>
                Data that is rarely accessed
            </KeyValue>
            <InfoBox>
                <p>Some people use <strong>In memory databases</strong> to store lightning fast info IE login information. The hottest storage. This acts like a RAMDISK (read / write to non-volatile not so often)</p>
            </InfoBox>
            <InfoH3>Buffer Pool</InfoH3>
            A buffer pool is RAM space taken by the DBMS.
            <KeyValue value={"Frame#"}>
                an identifier for a place in the buffer to store a page
            </KeyValue>
            <KeyValue value={"pageid"}>
                unique identifier for a page in the disk
            </KeyValue>
            <WarningBox>
                <p>Technically, a frame, page, data block refers to the same thing but in different contexts.</p>
            </WarningBox>
            <KeyValue value={"Dirty Bit"}>
                A flag that indicates whether a page has been modified since it was last written to disk.
            </KeyValue>

            <HowToH3>Loading a page from the disk</HowToH3>
            <OrderedList>
                <li>If the requested page is found in the buffer pool, return it.</li>
                <li>If the requested page is not found in the buffer pool:<ul>
                    <li>If there is an empty frame, choose that frame.</li>
                    <li>Otherwise, chose a frame for replacement. If the frame is dirty i.e., the <strong>dirty bit</strong> was set to 1 (the page in that frame was modified), write the changes back to the disk.</li>
                    <li>Read the requested page into the chosen frame.</li>
                </ul>
                </li>
                    <li>It is also important to check whether a page is currently being used by some other operation before removing it from the buffer. To keep track of page usage, the frames implement a <strong>frame counter</strong> or a <strong>page pin</strong>. Hence, while loading a page from disk:<ul>
                        <li>The replacement frame must have a frame counter of 0.</li>
                        <li>After the new page is loaded, set the frame counter of the frame to 1.</li>
                        <li>When some part of the application requests the page, increment the frame counter.</li>
                        <li>After the operation has finished, decrement the frame counter and set the dirty bit if the page has been modified.
                            -</li>
                    </ul>
                    </li>

            </OrderedList>
                    <WarningBox>
                        <p><strong>OS Flaws:</strong> While both DBMS and OS provide file systems and disk/buffer management, they are not interchangeable due to several reasons. The buffer management provided by the OS is minimal and not suitable for higher-level tasks in DBMS. There are portability issues when using OS-level operations, and OS file systems cannot span multiple disks. Buffer management in DBMS requires functionality like pinning a page, forcing a page to disk, adjusting replacement policy, and pre-fetching pages based on access patterns, which OS file systems do not efficiently implement. The OS is not adept at optimizing operations based on the type of data requested, while DBMS can intelligently pre-fetch and process data based on user queries.</p>
                    </WarningBox>
                    <InfoH3>Record Formats</InfoH3>
                    <KeyValue value={"Fixed-length records"}>
                        Like an array, needs to be oversized if its gonna be used with variable length records. Offset of each field is obvious to calculate.
                    </KeyValue>
                    <KeyValue value={"Variable-length records"}>
                        keeps track of the starting location of each field via the first few pointers (called metadata or row header). IE <code>{`[&name, &age, &bio, name, age, bio]`}</code>
                    </KeyValue>
                    Facts about variable length records:
                    <OrderedList>
                        <li>Metadata is stored in the first few bytes of the record.</li>
                        <li>Metadata is used to find the starting location of each field.</li>
                        <li>Nulls are efficiently stored by reserving a few bits</li>
                        <li>Small directory overhead</li>
                    </OrderedList>
                    <InfoH3>Record Storage</InfoH3>
                    <strong>All about storing a record on a page (serializing)</strong>
                    <h4>Page properties</h4>
                    <KeyValue value={"#Slots"}>
                        Maximum number of records that can be stored on a page (real number of records can be less than this)
                    </KeyValue>
                    <KeyValue value={"Slot directory"}>
                        Consists of metadata about each record:
                        - A pointer to the record stored on the page.
                        - The length of the record.
                    </KeyValue>
                    <KeyValue value={"Record::RID"}>
                        A record identifier that uniquely identifies a record in a table. <code>{`<pageid, slot_pos>`}</code>
                    </KeyValue>
                    <YesKey>Records can be stored in any order on a page, including with gaps</YesKey>
                    <InfoBox>
                        <p>It’s possible to move records across the page without changing the <code>rid</code>. To do so, simply move the record and change the slot pointer accordingly.</p>
                        <p>  It is even possible to store the actual record on some other page! To do so, we store the <code>rid</code> of the actual record as a proxy for the record on that page. For example, a record that was originally <code>&lt;3, 4&gt;</code> can be shifted to <code>&lt;4, 4&gt;</code> i.e., the contents of records are now at <code>&lt;4, 4&gt;</code> but the data at <code>&lt;3, 4&gt;</code> consists the <code>rid</code> <code>&lt;4, 4&gt;</code> instead of storing the content of the record.</p>
                    </InfoBox>
                </PageSection>
                <PageSection>
                    <InfoH3>Relation as file</InfoH3>
                    <p>DBMS provides an interface for interacting with the relation/file as follows:</p>
                    <ul>
                        <li>Insert a record: stores the record on a page and returns its <code>rid</code>.</li>
                        <li>Get a record by <code>rid</code>: returns the record.</li>
                        <li>Scan all records (possibly with some condition on some field): returns all qualifying records.</li>
                    </ul>
                    <TwoColumn>
                        <div>
                            <h4>Heap file (unordered)</h4>
                            <Image src={IMG_HEAPFILE}/>
                            <p>
                            simplest file structure, containing records in no particular order. As the file grows and shrinks, disk pages are allocated and de-allocated.

                            To support record-level operations, we must keep track of the pages in the file, free spaces on the page, and records on the page.
                            </p>

                        </div>
                        <div>
                            <h4>Sorted file (ordered)</h4>
                            <Image src={IMG_SORTEDFILE}/>
                            <p>
                                contains records sorted by one of the attributes. Since data lookup and searching is simpler when data is sorted, this kind of structure is preferred in most practical implementations. Sorted data allows us to achieve the same goal in lesser number of read/write operations ⇒ lesser the amount of disk I/O, the better the performance.
                            </p>
                        </div>
                    </TwoColumn>
                </PageSection>
            </PageColumns>
        </A4Paper>
    );
};
