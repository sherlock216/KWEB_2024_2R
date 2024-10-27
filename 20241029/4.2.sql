CREATE TABLE `users` (
    `id` VARCHAR(20) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `nickname` VARCHAR(50) NOT NULL,
    `profile_link` VARCHAR(255) NOT NULL,
    `profile_status` VARCHAR(255) NOT NULL,
    `deleted` TINYINT(1) NOT NULL DEFAULT FALSE,
    `join_date` DATE NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `channels` (
    `channel_id` VARCHAR(50) NOT NULL,
    `created_by` VARCHAR(20) NOT NULL,
    `channel_link` VARCHAR(255) NOT NULL,
    `max_people` INT NOT NULL,
    `deleted` TINYINT(1) NOT NULL DEFAULT FALSE,
    PRIMARY KEY (`channel_id`),
    FOREIGN KEY (`created_by`) REFERENCES `users`(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `chats` (
    `contents` VARCHAR(255) NOT NULL,
    `written_by` VARCHAR(20) NOT NULL,
    `channel_id` VARCHAR(50) NOT NULL,
    `contents_date` DATE NOT NULL,
    PRIMARY KEY (`contents`),
    FOREIGN KEY (`written_by`) REFERENCES `users`(`id`),
    FOREIGN KEY (`channel_id`) REFERENCES `channels`(`channel_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `follows` (
    `follower_id` VARCHAR(20) NOT NULL,
    `followee_id` VARCHAR(20) NOT NULL,
    `follow_date` DATE NOT NULL,
    PRIMARY KEY (`follower_id`, `followee_id`),
    FOREIGN KEY (`follower_id`) REFERENCES `users`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`followee_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `blocks` (
    `blocker_id` VARCHAR(20) NOT NULL,
    `blocked_id` VARCHAR(20) NOT NULL,
    `block_date` DATE NOT NULL,
    PRIMARY KEY (`blocker_id`, `blocked_id`),
    FOREIGN KEY (`blocker_id`) REFERENCES `users`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`blocked_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;