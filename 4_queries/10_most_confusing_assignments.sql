
SELECT assignments.id AS id, assignments.name AS name, assignments.day AS day, assignments.chapter AS chapter, count(*) AS total_requests
FROM assistance_requests
JOIN assignments ON assignments.id = assignment_id
GROUP BY assignments.id
ORDER BY total_requests DESC;





