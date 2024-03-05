DROP DATABASE IF EXISTS movie_dev;

CREATE DATABASE movie_dev;

\c movie_dev;

CREATE TABLE movies(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    year int,
    favorite BOOLEAN
);