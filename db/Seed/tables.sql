CREATE TABLE users(
id serial PRIMARY KEY,
username VARCHAR(20),
password VARCHAR(20),
profile_pic TEXT
);

CREATE TABLE posts(
id serial PRIMARY KEY,
title VARCHAR(45),
img text,
content text,
author int REFERENCES users(id)
)
