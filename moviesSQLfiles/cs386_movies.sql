-- This is an automatically generated file. Do not edit directly.

use normalized;
DROP TABLE IF EXISTS movies CASCADE;

CREATE TABLE `movies` (
   `movieTitle` varchar(30) NOT NULL,
   `genre` varchar(30) NOT NULL,
   `director` varchar(30),
   `rating` varchar(10),
   `description` varchar(1024),
   `smallImageURL` varchar(256),
   `largeImageURL` varchar(256)
);

CREATE INDEX `movies_movieTitle` USING BTREE on `movies`(`movieTitle`);
ALTER TABLE `movies` ADD PRIMARY KEY (`movieTitle`);

select * from movies;