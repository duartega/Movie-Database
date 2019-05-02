-- MySQL dump 10.13  Distrib 8.0.11, for macos10.13 (x86_64)
--
-- Host: localhost    Database: advising
-- ------------------------------------------------------
-- Server version	8.0.11

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8mb4 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `movies`
--

DROP TABLE IF EXISTS `movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `movies` (
  `movieTitle` varchar(30) NOT NULL,
  `genre` varchar(30) NOT NULL,
  `director` varchar(30) DEFAULT NULL,
  `rating` varchar(10) DEFAULT NULL,
  `description` varchar(1024) DEFAULT NULL,
  `smallImageURL` varchar(256) DEFAULT NULL,
  `largeImageURL` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`movieTitle`),
  KEY `movies_movieTitle` (`movieTitle`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies`
--

LOCK TABLES `movies` WRITE;
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` VALUES ('A Single Man','Drama','Tom Ford','R','In Los Angeles 1962, at the height of the Cuban missile crisis George Falconer, a 52 year old British college professor is struggling to find meaning to his life after the death of his long time partner, Jim. George dwells on the past and cannot see his future as we follow him through a single day, where a series of events and encounters, ultimately lead him to decide if there is a meaning to life after Jim.','http://kooshesh.cs.sonoma.edu/cs386/movieImages/aSingleManSmallImage.jpg','http://kooshesh.cs.sonoma.edu/cs386/movieImages/aSingleManLargeImage.jpg'),('Alvin and the Chipmunks','Comedy','Betty Thomas','PG','Alvin and The Chipmunks: The Squeakquel brings back our favorite furry brothers, Alvin, Simon and Theodore. Because of a freak accident involving Alvin and Dave Seville, they go to live with Dave Seville\'s cool cousin Toby and must enroll in school just like every other kid.','http://kooshesh.cs.sonoma.edu/cs386/movieImages/alvinAndTheChipmunksSmallImage.jpg','http://kooshesh.cs.sonoma.edu/cs386/movieImages/alvinAndTheChipmunksLargeImage.jpg'),('Avatar 3D','Action SciFi','James Cameron','PG13','Avatar is the story of an ex-Marine who finds himself thrust into hostilities on an alien planet filled with exotic life forms. As an Avatar, a human mind in an alien body, he finds himself torn between two worlds, in a desperate fight for his own survival and that of the indigenous people.','http://kooshesh.cs.sonoma.edu/cs386/movieImages/avatarSmallImage.jpg','http://kooshesh.cs.sonoma.edu/cs386/movieImages/avatarLargeImage.jpg'),('Cop Out','Drama','Kevin Smith','R','Two longtime NYPD partners on the trail of a stolen, rare, mint-condition baseball card find themselves up against a merciless, memorabilia-obsessed gangster. Jimmy the veteran detective whose missing collectible is his only hope to pay for his daughter\'s upcoming wedding, and Paul is his \'partner-against-crime\' whose preoccupation with his wife\'s alleged infidelity makes it hard for him to keep his eye on the ball.','http://kooshesh.cs.sonoma.edu/cs386/movieImages/copOutSmallImage.jpg','http://kooshesh.cs.sonoma.edu/cs386/movieImages/copOutLargeImage.jpg'),('Crazy Heart','Drama','Scott Cooper','R','Bad Blake is a broken-down, hard-living country music singer who\'s had way too many marriages, far too many years on the road and one too many drinks way too many times. And yet, Bad can\'t help but reach for salvation with the help of Jean, a journalist who discovers the real man behind the musician.','http://kooshesh.cs.sonoma.edu/cs386/movieImages/crazyHeartSmallImage.jpg','http://kooshesh.cs.sonoma.edu/cs386/movieImages/crazyHeartLargeImage.jpg'),('Dear John','Romance--War','Lesse Hallstrom','PG-13','Dear John tells story of John Tyree, a young soldier home on leave, and Savannah Curtis, the idealistic college student he falls in love with during her spring vacation. Over the next seven tumultuous years, the couple is separated by John\'s increasingly dangerous deployments.','http://kooshesh.cs.sonoma.edu/cs386/movieImages/dearJohnSmallImage.jpg','http://kooshesh.cs.sonoma.edu/cs386/movieImages/dearJohnLargeImage.jpg'),('Fish Tank','Drama','Andrea Arnold','PG-13','Fifteen-year-old Mia\'s world is turned upside down when her mother brings home a new boyfriend.','http://kooshesh.cs.sonoma.edu/cs386/movieImages/fishTankSmallImage.jpg','http://kooshesh.cs.sonoma.edu/cs386/movieImages/fishTankLargeImage.jpg'),('Invictus','Drama','Clint Eastwood','PG-13','The film tells the inspiring true story of how Nelson Mandela joined forces with the captain of South Africa\'s rugby team to help unite their country. Newly elected President Mandela knows his nation remains racially and economically divided in the wake of apartheid.','http://kooshesh.cs.sonoma.edu/cs386/movieImages/invictusSmallImage.jpg','http://kooshesh.cs.sonoma.edu/cs386/movieImages/invictusLargeImage.jpg'),('It\'s Complicated','Comedy/Romance','Nancy Meyers','R','Jane is the mother of three grown kids, owns a thriving Santa Barbara bakery/restaurant and has -- after a decade of divorce -- an amicable relationship with her ex-husband, attorney Jake. But when Jane and Jake find themselves out of town for their son\'s college graduation, things start to get complicated','http://kooshesh.cs.sonoma.edu/cs386/movieImages/itsComplicatedSmallImage.jpg','http://kooshesh.cs.sonoma.edu/cs386/movieImages/itsComplicatedLargeImage.jpg'),('Sherlock Holmes','Action','Guy Ritchie','PG-13','Sherlock Holmes has made his reputation finding the truth at the heart of the most complex mysteries. With the aid of Dr. John Watson, his trusted ally, the renowned consulting detective is unequaled in his pursuit of criminals of every stripe, whether relying on his singular powers of observation, his remarkable deductive skills, or the blunt force of his fists.','http://kooshesh.cs.sonoma.edu/cs386/movieImages/sherlockHolmesSmallImage.jpg','http://kooshesh.cs.sonoma.edu/cs386/movieImages/sherlockHolmesLargeImage.jpg'),('Shutter Island','Drama Thriller','Martin Scorsese','R','Shutter Island is the story of two U.S. marshals, Teddy Daniels and Chuck Aule, who are summoned to a remote and barren island off the coast of Massachusetts to investigate the mysterious disappearance of a murderess from the island\'s fortress-like hospital for the criminally insane.','http://kooshesh.cs.sonoma.edu/cs386/movieImages/shutterIslandSmallImage.jpg','http://kooshesh.cs.sonoma.edu/cs386/movieImages/shutterIslandLargeImage.jpg'),('The Blind Side','Biography Drama Sport','John Lee Hancock','PG-13','The story of Michael Oher, a homeless and traumatized boy who became an All American football player and first round NFL draft pick with the help of a caring woman and her family.','http://kooshesh.cs.sonoma.edu/cs386/movieImages/theBlindSideSmallImage.jpg','http://kooshesh.cs.sonoma.edu/cs386/movieImages/theBlindSideLargeImage.jpg'),('The Book of Eli','Action SciFi Thriller','Albert Hughes, Allen Hughes','R','A post-apocalyptic tale, in which a lone man fights his way across America in order to protect a sacred book that holds the secrets to saving humankind.','http://kooshesh.cs.sonoma.edu/cs386/movieImages/theBookOfEliSmallImage.jpg','http://kooshesh.cs.sonoma.edu/cs386/movieImages/theBookOfEliLargeImage.jpg'),('The Crazies','Action, Drama','Breck Eisner','R','Something is infecting the citizens of Ogden Marsh -- with insanity. In an effort to keep the madness contained, the government uses deadly force to close off all access and won\'t let anyone in or out -- even those uninfected. The few still sane find themselves trapped: Forced to band together, an ordinary night becomes a horrifying struggle for survival as they do their best to get out of town alive.','http://kooshesh.cs.sonoma.edu/cs386/movieImages/theCraziesSmallImage.jpg','http://kooshesh.cs.sonoma.edu/cs386/movieImages/theCraziesLargeImage.jpg'),('The Hurt Locker','Action Drama Thriller','Kathryn Bigelow','R','Iraq. Forced to play a dangerous game of cat-and-mouse in the chaos of war, an elite Army bomb squad unit must come together in a city where everyone is a potential enemy and every object could be a deadly bomb.','http://kooshesh.cs.sonoma.edu/cs386/movieImages/theHurtLockerSmallImage.jpg','http://kooshesh.cs.sonoma.edu/cs386/movieImages/theHurtLockerLargeImage.jpg'),('The Last Station','Biography Drama History','Michael Hoffman','R','A historical drama that illustrates Russian author Leo Tolstoy\'s struggle to balance fame and wealth with his commitment to a life devoid of material things.','http://kooshesh.cs.sonoma.edu/cs386/movieImages/theLastStationSmallImage.jpg','http://kooshesh.cs.sonoma.edu/cs386/movieImages/theLastStationLargeImage.jpg'),('The Lightning Thief','Adventure Fantasy','Chris Columbus','PG','A teenager discovers he\'s the descendant of a Greek god and sets out on an adventure to settle an on-going battle between the gods.','http://kooshesh.cs.sonoma.edu/cs386/movieImages/theLightningThiefSmallImage.jpg','http://kooshesh.cs.sonoma.edu/cs386/movieImages/theLightningThiefLargeImage.jpg'),('The White Ribbon','Crime Drama Mystery','Michael Haneke','R','Strange events happen in a small village in the north of Germany during the years just before World War I, which seem to be ritual punishment. The abused and suppressed children of the villagers seem to be at the heart of this mystery.','http://kooshesh.cs.sonoma.edu/cs386/movieImages/theWhiteRibbonSmallImage.jpg','http://kooshesh.cs.sonoma.edu/cs386/movieImages/theWhiteRibbonLargeImage.jpg'),('The Wolfman','Horror Thriller','Joe Johnston','R','Upon his return to his ancestral homeland, an American man is bitten, and subsequently cursed by, a werewolf.','http://kooshesh.cs.sonoma.edu/cs386/movieImages/theWolfmanSmallImage.jpg','http://kooshesh.cs.sonoma.edu/cs386/movieImages/theWolfmanLargeImage.jpg'),('Tooth Fairy','Comedy Fantasy','Michael Lembeck','PG','A bad deed on the part of a tough minor-league hockey player results in an unusual sentence: He must serve one week as a real-life tooth fairy.','http://kooshesh.cs.sonoma.edu/cs386/movieImages/toothFairySmallImage.jpg','http://kooshesh.cs.sonoma.edu/cs386/movieImages/toothFairyLargeImage.jpg'),('Up in the Air','Comedy Drama Romance','Jason Reitman','R','With a job that has him traveling around the country firing people, Ryan Bingham leads an empty life out of a suitcase, until his company does the unexpected: ground him.','http://kooshesh.cs.sonoma.edu/cs386/movieImages/upInTheAirSmallImage.jpg','http://kooshesh.cs.sonoma.edu/cs386/movieImages/upInTheAirLargeImage.jpg'),('Valentine\'s Day','Comedy Romance','Garry Marshall','PG-13','Intertwining couples and singles in Los Angeles break-up and make-up based on the pressures and expectations of Valentine\'s Day.','http://kooshesh.cs.sonoma.edu/cs386/movieImages/valentinesDaySmallImage.jpg','http://kooshesh.cs.sonoma.edu/cs386/movieImages/valentinesDayLargeImage.jpg');
/*!40000 ALTER TABLE `movies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cities`
--

DROP TABLE IF EXISTS `cities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `cities` (
  `cityName` varchar(30) NOT NULL,
  PRIMARY KEY (`cityName`),
  KEY `cities_cityName` (`cityName`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cities`
--

LOCK TABLES `cities` WRITE;
/*!40000 ALTER TABLE `cities` DISABLE KEYS */;
INSERT INTO `cities` VALUES ('Pateluma'),('Rhonert Park'),('Santa Rosa'),('Sebastopol'),('Sonoma');
/*!40000 ALTER TABLE `cities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movieTheaters`
--

DROP TABLE IF EXISTS `movieTheaters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `movieTheaters` (
  `theaterName` varchar(30) NOT NULL,
  `address` varchar(60) DEFAULT NULL,
  `cityName` varchar(30) DEFAULT NULL,
  `state` varchar(2) DEFAULT NULL,
  `zipCode` varchar(5) DEFAULT NULL,
  PRIMARY KEY (`theaterName`),
  KEY `movieTheaters_theaterName` (`theaterName`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movieTheaters`
--

LOCK TABLES `movieTheaters` WRITE;
/*!40000 ALTER TABLE `movieTheaters` DISABLE KEYS */;
INSERT INTO `movieTheaters` VALUES ('3rd Street Cinema','620 Third Street','Santa Rosa','CA',''),('Airport Stadium 12','409 Aviation Way','Santa Rosa','CA',''),('Boulevard Cinemas 12','200 C Street','Pateluma','CA',''),('Rialto Cinemas Lakeside','551 Summerfield Road','Santa Rosa','CA',''),('Rohnert Park 16','555 Rohnert Park Expressway West','Rhonert Park','CA','94928'),('Roxy 14 Stadium','85 Santa Rosa Ave.','Santa Rosa','CA',''),('Sebastopol 9 Cinemas','6868 McKinley Ave.','Sebastopol','CA',''),('Sonoma 9 Cinemas','200 Siesta Way','Sonoma','CA','');
/*!40000 ALTER TABLE `movieTheaters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `moviesAtTheaters`
--

DROP TABLE IF EXISTS `moviesAtTheaters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `moviesAtTheaters` (
  `theaterName` varchar(30) NOT NULL,
  `cityName` varchar(30) NOT NULL,
  `movieTitle` varchar(30) NOT NULL,
  PRIMARY KEY (`theaterName`,`cityName`,`movieTitle`),
  KEY `moviesAtTheaters_theaterName` (`theaterName`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `moviesAtTheaters`
--

LOCK TABLES `moviesAtTheaters` WRITE;
/*!40000 ALTER TABLE `moviesAtTheaters` DISABLE KEYS */;
INSERT INTO `moviesAtTheaters` VALUES ('3rd Street Cinema','Santa Rosa','Alvin and the Chipmunks'),('3rd Street Cinema','Santa Rosa','Invictus'),('3rd Street Cinema','Santa Rosa','It\'s Complicated'),('3rd Street Cinema','Santa Rosa','Sherlock Holmes'),('3rd Street Cinema','Santa Rosa','The Blind Side'),('3rd Street Cinema','Santa Rosa','The Book of Eli'),('3rd Street Cinema','Santa Rosa','Tooth Fairy'),('3rd Street Cinema','Santa Rosa','Up in the Air'),('Airport Stadium 12','Santa Rosa','Avatar 3D'),('Airport Stadium 12','Santa Rosa','Cop Out'),('Airport Stadium 12','Santa Rosa','Crazy Heart'),('Airport Stadium 12','Santa Rosa','Shutter Island'),('Airport Stadium 12','Santa Rosa','The Crazies'),('Airport Stadium 12','Santa Rosa','The Lightning Thief'),('Airport Stadium 12','Santa Rosa','Valentine\'s Day'),('Boulevard Cinemas 12','Petaluma','Avatar 3D'),('Boulevard Cinemas 12','Petaluma','Cop Out'),('Boulevard Cinemas 12','Petaluma','Crazy Heart'),('Boulevard Cinemas 12','Petaluma','Shutter Island'),('Boulevard Cinemas 12','Petaluma','The Crazies'),('Boulevard Cinemas 12','Petaluma','The Lightning Thief'),('Boulevard Cinemas 12','Petaluma','Tooth Fairy'),('Boulevard Cinemas 12','Petaluma','Up in the Air'),('Boulevard Cinemas 12','Petaluma','Valentine\'s Day'),('Rialto Cinemas Lakeside','Santa Rosa','A Single Man'),('Rialto Cinemas Lakeside','Santa Rosa','Crazy Heart'),('Rialto Cinemas Lakeside','Santa Rosa','Fish Tank'),('Rialto Cinemas Lakeside','Santa Rosa','The Hurt Locker'),('Rialto Cinemas Lakeside','Santa Rosa','The Last Station'),('Rialto Cinemas Lakeside','Santa Rosa','The White Ribbon'),('Rohnert Park 16','Rohnert Park','Avatar 3D'),('Rohnert Park 16','Rohnert Park','Cop Out'),('Rohnert Park 16','Rohnert Park','Dear John'),('Rohnert Park 16','Rohnert Park','Shutter Island'),('Rohnert Park 16','Rohnert Park','The Blind Side'),('Rohnert Park 16','Rohnert Park','The Crazies'),('Rohnert Park 16','Rohnert Park','The Wolfman'),('Rohnert Park 16','Rohnert Park','Tooth Fairy'),('Rohnert Park 16','Rohnert Park','Valentine\'s Day'),('Roxy 14 Stadium','Santa Rosa','Avatar 3D'),('Roxy 14 Stadium','Santa Rosa','Cop Out'),('Roxy 14 Stadium','Santa Rosa','Dear John'),('Roxy 14 Stadium','Santa Rosa','Shutter Island'),('Roxy 14 Stadium','Santa Rosa','The Crazies'),('Roxy 14 Stadium','Santa Rosa','The Wolfman'),('Roxy 14 Stadium','Santa Rosa','Valentine\'s Day'),('Sebastopol 9 Cinemas','Sebastopol','Avatar 3D'),('Sebastopol 9 Cinemas','Sebastopol','Cop Out'),('Sebastopol 9 Cinemas','Sebastopol','Crazy Heart'),('Sebastopol 9 Cinemas','Sebastopol','It\'s Complicated'),('Sebastopol 9 Cinemas','Sebastopol','Shutter Island'),('Sebastopol 9 Cinemas','Sebastopol','The Wolfman'),('Sebastopol 9 Cinemas','Sebastopol','Up in the Air'),('Sebastopol 9 Cinemas','Sebastopol','Valentine\'s Day'),('Sonoma 9 Cinemas','Sonoma','Avatar 3D'),('Sonoma 9 Cinemas','Sonoma','Cop Out'),('Sonoma 9 Cinemas','Sonoma','Crazy Heart'),('Sonoma 9 Cinemas','Sonoma','Dear John'),('Sonoma 9 Cinemas','Sonoma','Shutter Island'),('Sonoma 9 Cinemas','Sonoma','The Crazies'),('Sonoma 9 Cinemas','Sonoma','The Wolfman'),('Sonoma 9 Cinemas','Sonoma','Valentine\'s Day');
/*!40000 ALTER TABLE `moviesAtTheaters` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-04-01 22:21:11
