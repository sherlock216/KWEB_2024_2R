SELECT users.id, users.name, tickets.seat_number FROM tickets
JOIN users ON tickets.user = users.id
WHERE tickets.train = 11
ORDER BY tickets.seat_number ASC;

SELECT users.id, users.name, COUNT(tickets.train) AS trains_count, SUM(trains.distance * 0.1) AS total_distance FROM users
JOIN tickets ON users.id = tickets.user
JOIN trains ON tickets.train = trains.id
GROUP BY users.id
ORDER BY total_distance DESC LIMIT 6;

SELECT trains.id, types.name, src.name AS src_stn, dst.name AS dst_stn, Timediff(trains.arrival, trains.departure) AS travel_time FROM trains
JOIN types ON trains.type = types.id
JOIN stations AS src ON trains.source = src.id
JOIN stations AS dst ON trains.destination = dst.id
ORDER BY travel_time DESC LIMIT 6;

SELECT types.name AS type, src.name AS src_stn, dst.name AS dst_stn, trains.departure, trains.arrival, ROUND((types.fare_rate / 100) * (trains.distance * 0.1)) AS fare FROM trains
JOIN types ON trains.type = types.id
JOIN stations AS src ON trains.source = src.id
JOIN stations AS dst ON trains.destination = dst.id
ORDER BY trains.departure ASC;

SELECT trains.id, types.name AS type, src.name AS src_stn, dst.name AS dst_stn, COUNT(tickets.id) AS occupied, types.max_seats AS maximum FROM trains
JOIN tickets ON trains.id = tickets.train
JOIN types ON trains.type = types.id
JOIN stations AS src ON trains.source = src.id
JOIN stations AS dst ON trains.destination = dst.id
GROUP BY trains.id
ORDER BY trains.id ASC;

SELECT trains.id, types.name AS type, src.name AS src_stn, dst.name AS dst_stn, COUNT(tickets.id) AS occupied, types.max_seats AS maximum FROM trains
LEFT JOIN tickets ON trains.id = tickets.train
JOIN types ON trains.type = types.id
JOIN stations AS src ON trains.source = src.id
JOIN stations AS dst ON trains.destination = dst.id
GROUP BY trains.id
ORDER BY trains.id ASC;