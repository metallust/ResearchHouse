CREATE DATABASE researchhouse;
Use researchhouse;

-- Create Collage
CREATE TABLE college (
    aishe_code VARCHAR(50) PRIMARY KEY,
    -- college_name VARCHAR(50) REFERENCES your_college_name_table(college_name),
    college_name VARCHAR(50),
    college_city VARCHAR(50),
    college_district VARCHAR(50),
    college_state VARCHAR(50),
    college_uni VARCHAR(50),
    profile_pic VARCHAR(50),
    iic_code VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- Create PG coordinator table
CREATE TABLE coordinator (
    coordinator_id int PRIMARY KEY AUTO_INCREMENT,
    college_id VARCHAR(50) REFERENCES college(college_id),
    email VARCHAR(50),
    phone VARCHAR(50),
    profile_pic VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Student table
CREATE TABLE student (
    student_id VARCHAR(50) PRIMARY KEY,
    college_id VARCHAR(50) REFERENCES college(college_id),
    branch varchar(50),
    batch varchar(20),
    name VARCHAR(50),
    phone VARCHAR(50),
    email VARCHAR(50),
    password VARCHAR(50),
    profile_pic VARCHAR(50),
    guide_id varchar(50) references guide(guide_id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Guide table
CREATE TABLE guide (
    guide_id VARCHAR(50) PRIMARY KEY,
    college_id VARCHAR(50) REFERENCES college(college_id),
    name VARCHAR(50),
    phone VARCHAR(50),
    email VARCHAR(50),
    password VARCHAR(50),
    domain VARCHAR(50),
    experience INT,
    profile_pic VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- Create Committee table
CREATE TABLE committee (
    committee_id VARCHAR(50) PRIMARY KEY,
    college_id VARCHAR(50) REFERENCES college(college_id),
    name VARCHAR(50),
    phone VARCHAR(50),
    email VARCHAR(50),
    password VARCHAR(50),
    domain VARCHAR(50),
    experience INT,
    profile_pic VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
 