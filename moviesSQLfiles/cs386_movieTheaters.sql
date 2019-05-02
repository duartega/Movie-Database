-- This is an automatically generated file. Do not edit directly.

use normalized;
DROP TABLE IF EXISTS movieTheaters CASCADE;

CREATE TABLE `movieTheaters` (
   `theaterName` varchar(30),
   `address` varchar(60),
   `cityName` varchar(30),
   `state` varchar(2),
   `zipCode` varchar(5)
);

CREATE INDEX `movieTheaters_theaterName` USING BTREE on `movieTheaters`(`theaterName`);
ALTER TABLE `movieTheaters` ADD PRIMARY KEY (`theaterName`);

