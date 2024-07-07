
CREATE DATABASE robo_project_auth;

USE robo_project_auth;

CREATE TABLE robo_project_auth.users
( user_id int(11) NOT NULL AUTO_INCREMENT,
  username varchar(25) NOT NULL,
  password varchar(30) NOT NULL,
  is_verified TINYINT(1) DEFAULT 0,
  PRIMARY KEY (`user_id`)
);