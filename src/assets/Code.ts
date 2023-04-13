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

export const PIG_LATIN_Q1 = `An input is a Person P, and P’s List of Friends For each friend F in the List of Friends
// Our output pairs will be alphabetical ordered.
// ie (X,Y) would always be such that X < Y
// It is ok if F is not removed here.
// In our Reducer logic, it will be removed anyways.
IF P<F Output ( (P,F), (list of friends)-F)
ELSE Output ( (F,P), (list of friends)-F)
If we provide (Joe, (Abe,Jane,Ali,Zack)) as the input, the output produce by the above mapper would be: (Abe,Joe), (Jane,Ali,Zack)
(Jane,Joe), (Abe,Ali,Zack) | (Ali,Joe), (Abe,Jane,Zack) | (Joe,Zack), (Abe,Jane,Ali)
The reducer below would get inputs of the following format (including whatever is processed from Ali’s friend list). (Ali,Joe), ((Abe,Jane,Zack),(Sheila,Jane,Zack,Mary))
Input is a pair of friends (P1,P2) and corresponding lists of friends ((List of friends 1),(List of friends 2))
// Take intersection of the friend lists.
Output (P1,P2), (common individuals in the list of friends 1 and 2) In our case, the output of the above reducer would look something like this. (Ali,Joe), (Jane,Zack)
For any pair of friends (X,Y), we will store only information for (X,Y), such that X < Y, thus avoiding duplicates. When the application has to lookup (Y,X), it can internally check whether X < Y and instead lookup (X,Y).`;

export const PIG_LATIN_Q6 = `--load the data from HDFS and define the schema
movies = LOAD '/data/movies.csv' USING PigStorage(',') AS (movieid:INT, title:CHARARRAY, year:INT);
-- grouping movies into year
moviesperyear = GROUP movies BY year;
-- get the year and number of movies in each year.
yearcount = FOREACH moviesperyear GENERATE group AS year, COUNT($1) AS nummovies;
-- generate one more table with year increased by one.
yearcount2 = FOREACH yearcount GENERATE year+1 AS curryear, nummovies;
-- join them both such that current year aligns with the previous year.
joinyears = JOIN yearcount BY year, yearcount2 BY curryear;
-- read only the attributes that we need.
moviecounts = FOREACH joinyears GENERATE yearcount2::curryear, yearcount::nummovies AS currnummovies, yearcount2::nummovies AS prevnummovies;
-- Find out the years in which the number of movies decreased.
badyears = FILTER moviecounts BY currnummovies < prevnummovies;
-- Send the output to the screen.
DUMP badyears;
-- Order the output by year.
--orderdbadyears = ORDER badyears BY curryear;
-- Send the output to the screen.
DUMP orderdbadyears;`;


export const CYPHER_Q1 = `MATCH (keanu:Person {name:'Keanu Reeves'})
RETURN keanu.name, keanu.born`;

export const CYPHER_Q2 = `MATCH (bornInEighties:Person)
WHERE bornInEighties.born >= 1980 AND bornInEighties.born < 1990
RETURN bornInEighties.name as name, bornInEighties.born as born ORDER BY born DESC`


export const SQL_VIEW = `CREATE VIEW activeSkaters (sid, sname) AS 
\t\tSELECT DISTINCT S.sid, S.sname
\t\tFROM skaters S, participates P
\t\tWHERE S.sid = P.sid;

-- we can now run queries over this view as if it were a query of its own
SELECT * 
FROM activeSkaters
WHERE sname = 'john';

-- delete a view using the DROP VIEW clause
DROP VIEW activeSkaters;`

export const SQL_NESTED = `-- find names of skaters who have participated in competition #101
SELECT sname
FROM skaters
WHERE sid IN (SELECT sid 
\t\t\t\t\t\t\tFROM participates 
\t\t\t\t\t\t\tWHERE cid = 101);`

export const SQL_AGGREGATION = `-- find the average age and number of skaters with rating 7
SELECT AVG(age), COUNT(*)
FROM skaters
WHERE rating = 7;

-- find the number of distinct ratings
SELECT COUNT(DISTINCT rating)
FROM skaters;

-- find the first skater alphabetically by name
-- MAX and MIn can be used lexicographically as well
SELECT MIN(sname)
FROM skaters;

-- find the names of skaters with the highest rating
SELECT sname
FROM skaters
WHERE rating = (SELECT MAX(rating) 
\t\t\t\t\t\t\t\tFROM skaters);`

export const SQL_IC = `CREATE TABLE skaters (
 sid INT NOT NULL,
 tsname VARCHAR(20),
 rating INT CONSTRAINT rat CHECK (rating < 11), --atribute based
 age INT,
 CONSTRAINT pk PRIMARY KEY (sid),
 CONSTRAINT ratage CHECK(rating > 0 AND age > 13) --tuple based
);`
