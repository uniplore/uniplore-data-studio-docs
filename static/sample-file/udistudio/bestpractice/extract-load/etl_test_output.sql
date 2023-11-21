CREATE TABLE etl_test_output (
  project_name varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  start_date date DEFAULT NULL,
  end_date date DEFAULT NULL,
  diff_date int(11) DEFAULT NULL,
  performance varchar(255) DEFAULT NULL,
  duration varchar(255) DEFAULT NULL,
  message varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
