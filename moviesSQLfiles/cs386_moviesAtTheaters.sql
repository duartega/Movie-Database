-- This is an automatically generated file. Do not edit directly.

use normalized;
DROP TABLE IF EXISTS moviesAtTheaters CASCADE;

CREATE TABLE `moviesAtTheaters` (
   `theaterName` varchar(30),
   `cityName` varchar(30),
   `movieTitle` varchar(30)
);

CREATE INDEX `moviesAtTheaters_theaterName` USING BTREE on `moviesAtTheaters`(`theaterName`);
ALTER TABLE `moviesAtTheaters` ADD PRIMARY KEY (`theaterName`, `cityName`, `movieTitle`);
