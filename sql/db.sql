-- Create User Table
CREATE TABLE users (
                       id INT AUTO_INCREMENT PRIMARY KEY,
                       username VARCHAR(50) NOT NULL UNIQUE,
                       email VARCHAR(100) NOT NULL UNIQUE,
                       password VARCHAR(100) NOT NULL,
                       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                       updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create Task Table
CREATE TABLE tasks (
                       id INT AUTO_INCREMENT PRIMARY KEY,
                       title VARCHAR(100) NOT NULL,
                       description TEXT,
                       due_date DATE,
                       status VARCHAR(50),
                       user_id BIGINT,
                       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                       updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                       FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Create Password Reset Token Table
CREATE TABLE password_reset_tokens (
                                       id INT AUTO_INCREMENT PRIMARY KEY,
                                       token VARCHAR(100) NOT NULL,
                                       expiration_date TIMESTAMP NOT NULL,
                                       user_id BIGINT,
                                       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                                       FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Create Comodoro Table
CREATE TABLE comodoros (
                           id INT AUTO_INCREMENT PRIMARY KEY,
                           work_duration INT NOT NULL,
                           break_duration INT NOT NULL,
                           long_break_duration INT NOT NULL,
                           cycles INT NOT NULL,
                           user_id BIGINT,
                           created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                           updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                           FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
