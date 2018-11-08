DROP DATABASE "dmi-db";
CREATE DATABASE "dmi-db";
\c dmi-db
CREATE TABLE strings (id SERIAL PRIMARY KEY, string TEXT);
INSERT INTO strings (string) VALUES('Here we have a string');
\q