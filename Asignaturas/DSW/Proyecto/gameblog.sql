DROP DATABASE IF EXISTS gameblog;
CREATE DATABASE gameblog DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci;
CREATE USER IF NOT EXISTS 'gameblog'@'localhost' IDENTIFIED BY 'dawgameblog';
GRANT ALL ON gameblog.* TO 'gameblog'@'localhost';

use gameblog;

CREATE TABLE usuarios (
  id int(6) auto_increment,
  usuario varchar(30) UNIQUE,
  passwd varchar(20),
  email varchar(40) UNIQUE,
  PRIMARY KEY(id)
) ENGINE=InnoDB;
  
INSERT INTO usuarios VALUES
(0,'admin','admin','gameblog@support.com')

