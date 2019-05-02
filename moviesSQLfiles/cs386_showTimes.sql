-- This is an automatically generated file. Do not edit directly.

use cs386_gduarte;
DROP TABLE IF EXISTS showTimes CASCADE;

CREATE TABLE `showTimes` (
   `movieTitle` varchar(30),
   `theaterName` varchar(30),
   `time` varchar(10)
);

CREATE INDEX `showTimes_theaterName` USING BTREE on `showTimes`(`theaterName`);
ALTER TABLE `showTimes` ADD PRIMARY KEY (`movieTitle`, `theaterName`, `time`);

