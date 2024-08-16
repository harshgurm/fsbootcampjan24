CREATE TABLE `students` (
   `student_id` int NOT NULL AUTO_INCREMENT,
   `first_name` varchar(255) DEFAULT NULL,
   `last_name` varchar(255) DEFAULT NULL,
   `status` tinyint(1) DEFAULT '1',
   `starting_date` datetime DEFAULT CURRENT_TIMESTAMP,
   PRIMARY KEY (`student_id`)
 ) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1