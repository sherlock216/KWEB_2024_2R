CREATE TABLE `departments` (
    `id` VARCHAR(20) NOT NULL,
    `major_name` VARCHAR(20) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `student` (
    `name` VARCHAR(20) NOT NULL,
    `year` INT NOT NULL,
    `major_id` VARCHAR(20) NOT NULL,
    `unique_num` VARCHAR(20) NOT NULL,
    `phone` VARCHAR(20) NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `credit` INT NOT NULL DEFAULT 0,
    `avg_credit` FLOAT NOT NULL DEFAULT 0.0,
    `is_enrolled` TINYINT(1) NOT NULL DEFAULT TRUE,
    PRIMARY KEY (`year`, `major_id`, `unique_num`),
    FOREIGN KEY (`major_id`) REFERENCES `departments`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;