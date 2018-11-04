DROP DATABASE dmi - db;CREATE DATABASE dmi - db;\ c dmi - db CREATE TABLE strings (id SERIAL PRIMARY KEY, content TEXT);
INSERT INTO
  strings (content)
VALUES
  ('Your first message!');