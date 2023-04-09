import { A4Paper } from "../components/Paper";
import React from "react";
import { PageHeader } from "../components/PageHeader";
import { SQL } from "../components/Code";
import { Callout, PageColumns, PageSection } from "../components/Layout";
import { BASIC_SQL_EXAMPLE } from "../assets/Code";
import { KeyValue, NoKey, YesKey } from "../components/KeyValue";

export const Page1: React.FC<{}> = () => {
  return (
    <A4Paper>
      <PageHeader>Page 1 - DBMS</PageHeader>
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
        </PageSection>
        <PageSection>
          <h2>SQL</h2>
          <p>
            SQL is a standard language for accessing and manipulating databases.
            SQL stands for Structured Query Language. SQL lets you access and
            manipulate databases. SQL became a standard of the American National
            Standards Institute (ANSI) in 1986, and of the International
            Organization for Standardization (ISO) in 1987.
          </p>
          <SQL code={BASIC_SQL_EXAMPLE} />
        </PageSection>
      </PageColumns>
    </A4Paper>
  );
};
