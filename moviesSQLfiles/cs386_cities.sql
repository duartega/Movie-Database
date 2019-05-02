-- This is an automatically generated file. Do not edit directly.

use normalized;
DROP TABLE IF EXISTS cities CASCADE;

CREATE TABLE `cities` (
   `cityName` varchar(30)
);

CREATE INDEX `cities_cityName` USING BTREE on `cities`(`cityName`);
ALTER TABLE `cities` ADD PRIMARY KEY (`cityName`);

