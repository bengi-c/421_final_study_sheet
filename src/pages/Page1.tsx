import { A4Paper, Image } from "../components/Paper";
import React from "react";
import { PageHeader } from "../components/PageHeader";
import {
  OrderedList,
  PageColumns,
  PageSection,
} from "../components/Layout";
import { KeyValue, NoKey, YesKey } from "../components/KeyValue";
import "katex/dist/katex.min.css";
import { FaGithub } from "react-icons/fa";

import ImgER1 from "../assets/images/er-1.png";
import { LatexSymbol } from "../components/Latex";
import {Example, ExampleH3, HowTo, HowToH3, Info, InfoH3} from "../components/QuickSymbols";

import ImageERRM1 from "../assets/images/er_to_rm_1.png";
import ImageERRM2 from "../assets/images/er_to_rm_2.png";
import ImageERRM3 from "../assets/images/er_to_rm_3.png";
import { SQL } from "../components/Code";
import {
  SQL_CREATE_EXAMPLE,
  SQL_DELETE_EXAMPLE,
  SQL_INSERT_EXAMPLE,
  SQL_SELECT_EXAMPLE,
  SQL_UPDATE_EXAMPLE,
} from "../assets/Code";
import { InfoBox } from "../components/ThemedBoxes";

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
          <InfoH3>
            Entities & Relationships
          </InfoH3>
          <YesKey>Entity Set == Class == Table</YesKey>
          <YesKey>Entity == Instance == Table Row</YesKey>
          <YesKey>Relationship == Association == Foreign Key</YesKey>
          <p>Constraints</p>
          <KeyValue value={"Overlap"}>
            1 entity belong to 2+ subclasses
          </KeyValue>
          <KeyValue value={"Covering"}>
            Must an entity belong to a subclass?
          </KeyValue>
          <InfoH3>
            Relationships
          </InfoH3>
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
          <InfoBox>
            In a nutshell, key constraint (arrow) ⇒ at most one; participation
            constraint (thick line) ⇒ at least once. The affected entity set is
            joined to the relationship by the appropriate notation.
          </InfoBox>
          <Image src={ImgER1} alt={"ER Diagram"} />
          <InfoH3>
            Symbol Glossary
          </InfoH3>
          <KeyValue value={"Entity"}>Rectangle</KeyValue>
          <KeyValue value={"Relationship"}>Diamond</KeyValue>
          <KeyValue value={"ISA"}>Triangle</KeyValue>
          <KeyValue value={"Participation"}>Thick Line</KeyValue>
          <KeyValue value={"Key"}>Arrow</KeyValue>
          <KeyValue value={"Weak"}>Dashed Line</KeyValue>
          <KeyValue value={"Derived"}>Dotted Line</KeyValue>
          <KeyValue value={"Identifying"}>Double Line</KeyValue>
          <InfoBox>
            relation = table; instances = rows; columns = attributes
          </InfoBox>
          <InfoBox>
            A schema can be considered an entity set, while an instance is
            comparable to an entity.
          </InfoBox>
          <InfoH3>
            Schemas & Relation
          </InfoH3>
          - **Schema**: specifies the name of the relation, plus a set of
          attributes along with their domain/data type. - Example:
          `Students(sid: int, name: string, login:string, faculty: string,
          major:string)`.
          <KeyValue value={"defines the schema of a relational database."}>
            Data Definition Language (DDL)
          </KeyValue>
          <KeyValue
            value={
              "manipulates the data i.e., the rows of the relation. (CURD)"
            }
          >
            Data Manipulation Language (DML)
          </KeyValue>
          <InfoBox>
            Being a data-centric language means that it is independent of the
            physical/file format the data is stored in. The querying syntax
            remains the same. It’s like an abstraction.
          </InfoBox>
          <InfoH3>
             Constraints
          </InfoH3>
          <h4>Integrity Constraints (IC)</h4>
          <KeyValue value={"NOT NULL"}>
            A column cannot contain NULL values.
          </KeyValue>
          <KeyValue value={"UNIQUE / PRIMARY KEY"}>
            A column cannot contain duplicate values.
          </KeyValue>
          <KeyValue value={"DEFAULT"}>
            A column is assigned a default value if no value is specified.
          </KeyValue>
          <KeyValue value={"FOREIGN KEY"}>
            Must correspond to the primary key of the relation it refers to.
          </KeyValue>
        </PageSection>
        <PageSection>
          <HowToH3>
             ER Diagram {"->"} Relational Schema{" "}
          </HowToH3>
          <OrderedList>
            <li>
              Entity set → relation: Convert each entity set into a table and
              its attributes as columns.
            </li>
            <li>
              Many-many relationship set → relation: Create an individual table
              for the many-to-many relationship set. Include primary keys for
              each participating entity set as foreign keys and all other
              descriptive attributes of the relationship set.
            </li>
            <li>
              Relationship set with key constraint → relation: Choose one of two
              options:
              <ol>
                <li>
                  Map the relationship set to a new table with the primary key
                  of the entity set with key constraint as the primary key of
                  the new table.
                </li>
                <li>
                  Include the relationship set in the table of the entity set
                  with key constraint as a foreign key attribute.
                </li>
              </ol>
            </li>
            <li>
              Relationship set with key and participation constraint → relation:
              Include the relationship set in a table of the entity set (as a
              foreign key attribute) with key and participation constraints. Set
              the foreign key to NOT NULL.
            </li>
            <li>
              Relationship set with participation constraint → relation: Create
              a schema similar to a many-to-many relationship set, but handle
              the participation constraint on the application level.
            </li>
            <li>
              Renaming attributes/foreign keys: Rename attributes or foreign
              keys if the attributes of participating entity sets have the same
              name.
            </li>
            <li>
              Weak entity set → relation: Combine the weak entity set and the
              supporting relationship set into a single table.
            </li>
            <li>
              ISA hierarchy → relation: Distribute information among relations,
              with the superclass relation storing general attributes, including
              the primary key, and subclass relations having the primary key of
              the superclass as a foreign key and any additional attributes.
            </li>
          </OrderedList>
          <InfoH3>
             Additional ER Tips N Tricks
          </InfoH3>
          <InfoBox>
            Note that in ER models, subclasses don’t have a key attribute of
            their own since that would be redundant. However, in relational
            models, sub-tables have primary key attributes, which represent a
            reference to the parent table. This is NOT redundant but rather the
            encoding of ISA symbol.
          </InfoBox>
          <InfoBox>
            Another approach to translating ISA hierarchies would be to have
            one big relation with all the possible attributes in various
            subclasses. It would make querying simpler, however, the
            disadvantage is that it would have a lot of `NULL` values that waste
            storage space. Moreover, it would no longer be possible to have
            relationships that can occur selectively only with certain
            subclasses.
          </InfoBox>
          <ExampleH3>
            Converting ER to Relational
          </ExampleH3>
          <Image src={ImageERRM1} alt={"ER Diagram"} />
          <Image src={ImageERRM2} alt={"ER Diagram"} />
          <Image src={ImageERRM3} alt={"ER Diagram"} />
          <InfoBox>
            There is an option to cascade delete the rows in all foreign tables, in case the row is deleted from the parent table. For example, if a row is deleted from Students,  it would also be deleted from Enrolled.
          </InfoBox>
        </PageSection>

        <PageSection>
          <InfoH3>
            SQL Types
          </InfoH3>
          <KeyValue value={"CHAR(n)"}>
            Fixed-length string of length n. Example: `CHAR(5)` can store a
            string of length 5.
          </KeyValue>
          <KeyValue value={"VARCHAR(n)"}>
            Variable-length string of length n. Example: `VARCHAR(5)` can store
            a string of length 5.
          </KeyValue>
          <KeyValue value={"INTEGER"}>Integer.</KeyValue>
          <KeyValue value={"SHORTINT"}>Short integer (2 bytes).</KeyValue>
          <KeyValue value={"FLOAT or REAL"}>Floating point number.</KeyValue>
          <KeyValue value={"DOUBLE PRECISION"}>
            Double precision floating point number (8 bytes).
          </KeyValue>
          <KeyValue value={"DECIMAL(p, s)"}>
            Decimal number with p digits and s digits after the decimal point.
          </KeyValue>
          <KeyValue value={"DATE"}>
            Date in the format <code>YYYY-MM-DD</code>.
          </KeyValue>
          <KeyValue value={"TIME"}>
            Time in the format <code>HH:MM:SS</code>.
          </KeyValue>
          <KeyValue value={"BITSTRING / BLOB"}>
            Bit string or a BLOB, i.e., a binary large object. Raw bits.
          </KeyValue>
          <YesKey>User Defined Custom Types (uncommon)</YesKey>
          <ExampleH3>
            Basic SQL
          </ExampleH3>
          <h4>Create Table</h4>
          <SQL code={SQL_CREATE_EXAMPLE} />
          <h4>Insert tuple into table</h4>
          <SQL code={SQL_INSERT_EXAMPLE} />
          <h4>Select tuple(s) from table</h4>
          <SQL code={SQL_SELECT_EXAMPLE} />
          <h4>Update tuple(s) in table</h4>
          <SQL code={SQL_UPDATE_EXAMPLE} />
          <h4>Delete tuple(s) from table</h4>
          <SQL code={SQL_DELETE_EXAMPLE} />
        </PageSection>
      </PageColumns>
    </A4Paper>
  );
};
