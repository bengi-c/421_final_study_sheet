export const BASIC_SQL_EXAMPLE = `CREATE TABLE Persons (
PersonID int,
LastName varchar(255),
FirstName varchar(255),
Address varchar(255),
City varchar(255)
);`;

export const BASIC_JAVA_EXAMPLE = `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World");
    }
}`;

export const SQL_INSERT_EXAMPLE = `INSERT INTO Students
\tVALUES (53666, 'Bartoli', 'bartoli@cs', 'Science', 'Software Engineering')

INSERT INTO Students (sid, name, faculty)
\tVALUES (53688, 'Chang', 'Eng')

INSERT INTO Students (sid, name, major)
\tVALUES (53650, 'Chang', 'Computer Science')`;

export const SQL_CREATE_EXAMPLE = `CREATE TABLE Students
\t(sid INT NOT NULL, /* sid cannot be NULL */
\t name VARCHAR(30),
\t login VARCHAR(30),
\t faculty VARCHAR(20),
\t major VARCHAR(20) DEFAULT 'undefined') /* set the default value for major
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t to be undefined */`;

export const SQL_DELETE_EXAMPLE = `DELETE
FROM Students
WHERE name = 'Chang'`;

export const SQL_UPDATE_EXAMPLE = `UPDATE Students
SET major = 'Software Engineering'
WHERE sid = 53688`;

export const SQL_SELECT_EXAMPLE = `SELECT name, major
FROM Students
WHERE faculty = 'Science'`;

export const SQL_ALTER_EXAMPLE = `ALTER TABLE Students
	ADD COLUMN firstYear: INT`;

export const SQL_PKEY_CONSTRAINT_EXAMPLE = `-- Primary key has 1 attribute
CREATE TABLE Students
	(sid INT PRIMARY KEY, /* set sid as the primary key; it's automatically NOT NULL */
	 login VARCHAR(30) NOT NULL UNIQUE, /* candidate key; not automatically NOT NULL */
	 name VARCHAR(20),
	 faculty VARCHAR(20),
	 major VARCHAR(20))

-- Primary key has more than 1 attributes
CREATE TABLE Location
	(building VARCHAR(20),
	 roomNo INT,
	 capacity INT,
	 PRIMARY KEY (building, roomNo))`;

export const QUICK_SYMBOLS_USAGE_EXAMPLE = `const MyInfoBlock = <h3> <Info/> Types in SQL </h3>;

const MyHowToBlock = <h3> <HowTo/> How to use SQL </h3>;
    
const MyExampleBlock = <h3> <Example/> Example of SQL Insert </h3>;
`;

export const SQL_CREATE_INDEX = `CREATE INDEX idxSID ON students(sid); -- create index on sid
DROP INDEX idxSID; -- drop index on sid`;
