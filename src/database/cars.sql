-- Active: 1690393465464@@127.0.0.1@3306
CREATE TABLE cars (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    marca TEXT NOT NULL,
    year NUMBER NOT NULL,
    created_at TEXT DEFAULT(datetime('now', 'localtime'))
);
DROP TABLE cars;
INSERT INTO cars(id, name, marca, year)
VALUES
    ('c001', 'Duster','Renault', 2021),
    ('c0041', 'KA','Ford', 2018);

SELECT * FROM cars;