import { A4Paper, Image } from "../components/Paper";
import React from "react";
import { PageHeader } from "../components/PageHeader";
import {
  Callout,
   OrderedList,
  PageColumns,
  PageSection,
} from "../components/Layout";
import { KeyValue, NoKey, YesKey } from "../components/KeyValue";
import "katex/dist/katex.min.css";
import { FaGithub } from "react-icons/fa";

import ImgER1 from "../assets/images/er-1.png";
import {LatexSymbol} from "../components/Latex";
import {Example, HowTo, Info} from "../components/QuickSymbols";

import ImageERRM1 from "../assets/images/er_to_rm_1.png";
import ImageERRM2 from "../assets/images/er_to_rm_2.png";
import ImageERRM3 from "../assets/images/er_to_rm_3.png";

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
          <h3><Info/>Entities & Relationships</h3>
          <YesKey>Entity == Class == Table</YesKey>
          <YesKey>Relationship == Association == Foreign Key</YesKey>
          <p>Constraints</p>
          <KeyValue value={"Overlap"}>
            1 entity belong to 2+ subclasses
          </KeyValue>
          <KeyValue value={"Covering"}>
            Must an entity belong to a subclass?
          </KeyValue>
          <h3><Info/> Relationships</h3>
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
          <h3><Info/>Symbol Glossary</h3>
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
          <h3><Info/> Schemas & Relation</h3>
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
            <h3><HowTo/> ER Diagram {"->"} Relational Schema </h3>
          <OrderedList>
            <li>Entity set → relation: Convert each entity set into a table and its attributes as columns.</li>
            <li>Many-many relationship set → relation: Create an individual table for the many-to-many relationship set. Include primary keys for each participating entity set as foreign keys and all other descriptive attributes of the relationship set.</li>
            <li>Relationship set with key constraint → relation: Choose one of two options:
              <ol>
                <li>Map the relationship set to a new table with the primary key of the entity set with key constraint as the primary key of the new table.</li>
                <li>Include the relationship set in the table of the entity set with key constraint as a foreign key attribute.</li>
              </ol>
            </li>
            <li>Relationship set with key and participation constraint → relation: Include the relationship set in a table of the entity set (as a foreign key attribute) with key and participation constraints. Set the foreign key to NOT NULL.</li>
            <li>Relationship set with participation constraint → relation: Create a schema similar to a many-to-many relationship set, but handle the participation constraint on the application level.</li>
            <li>Renaming attributes/foreign keys: Rename attributes or foreign keys if the attributes of participating entity sets have the same name.</li>
            <li>Weak entity set → relation: Combine the weak entity set and the supporting relationship set into a single table.</li>
            <li>ISA hierarchy → relation: Distribute information among relations, with the superclass relation storing general attributes, including the primary key, and subclass relations having the primary key of the superclass as a foreign key and any additional attributes.</li>
          </OrderedList>
          <h3><Info/> Additional ER Tips N Tricks</h3>
          <Callout>
            💡 Note that in ER models, subclasses don’t have a key attribute of their own since that would be redundant. However, in relational models, sub-tables have primary key attributes, which represent a reference to the parent table. This is NOT redundant but rather the encoding of ISA symbol.
          </Callout>
          <Callout>
            💡 Another approach to translating ISA hierarchies would be to have one big relation with all the possible attributes in various subclasses. It would make querying simpler, however, the disadvantage is that it would have a lot of `NULL` values that waste storage space. Moreover, it would no longer be possible to have relationships that can occur selectively only with certain subclasses.
          </Callout>
          <h3><Example/> Converting ER to Relational</h3>
          <Image src={ImageERRM1} alt={"ER Diagram"} />
            <Image src={ImageERRM2} alt={"ER Diagram"} />
            <Image src={ImageERRM3} alt={"ER Diagram"} />
        </PageSection>
      </PageColumns>
    </A4Paper>
  );
};
