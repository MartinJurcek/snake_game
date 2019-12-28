-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jun 24, 2019 at 10:29 AM
-- Server version: 5.7.24
-- PHP Version: 7.2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `snake_game`
--

-- --------------------------------------------------------

--
-- Table structure for table `about_user`
--

DROP TABLE IF EXISTS `about_user`;
CREATE TABLE IF NOT EXISTS `about_user` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `highscore` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `about_user`
--

INSERT INTO `about_user` (`ID`, `username`, `highscore`) VALUES
(1, 'martin', '23'),
(2, 'david', '16'),
(3, 'uros', '12'),
(4, 'veljko', '4'),
(7, 'pera', '4'),
(8, 'fbdgbd', '5'),
(11, 'riki', '5'),
(12, 'jlljjl', '2'),
(41, 'vts', '3'),
(43, 'Lukacs', '17'),
(45, 'fbdgbd', '18'),
(47, 'sdfafasd', '1'),
(48, 'suput', '3'),
(49, 'vts', '11');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
