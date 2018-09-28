-- Creates database instakush_test_db
CREATE DATABASE IF NOT EXISTS instakush_test_db;
USE instakush_test_db;
CREATE USER IF NOT EXISTS 'instakush_test'@'localhost';
SET PASSWORD FOR 'instakush_test'@'localhost' = 'instakush_test_pwd';
GRANT ALL PRIVILEGES ON instakush_test_db.* TO 'instakush_test'@'localhost';
GRANT SELECT ON performance_schema.* TO 'instakush_test'@'localhost';
