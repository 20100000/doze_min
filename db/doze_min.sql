-- schema.sql
CREATE DATABASE IF NOT EXISTS `doze_min`;
USE `doze_min`;

CREATE TABLE IF NOT EXISTS `music` (
  `id` MEDIUMINT NOT NULL AUTO_INCREMENT,
  `title` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `file_path` varchar(155) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
CREATE TABLE IF NOT EXISTS `tags` (
  `id` MEDIUMINT NOT NULL AUTO_INCREMENT,
  `name_tag` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `music_id` int(11) NOT NULL,
   PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
CREATE TABLE IF NOT EXISTS `accounts` (
    `id` MEDIUMINT NOT NULL AUTO_INCREMENT,
    `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
    `password` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
    `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
     PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
INSERT INTO `accounts` ( `email`, `password`, `name`) VALUES ('teste@12min.com', '123456', '12min');
COMMIT;
