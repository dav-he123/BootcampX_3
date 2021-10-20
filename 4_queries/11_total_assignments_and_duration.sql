
SELECT assignments.day AS day, count(*) AS number_of_assignments, SUM(assignments.duration) AS duration
FROM assignments
GROUP BY day
ORDER BY day;
