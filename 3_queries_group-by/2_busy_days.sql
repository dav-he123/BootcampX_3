SELECT day, count(*) AS total_assignemnts
FROM assignments
GROUP BY day
HAVING count(*) >= 10
ORDER BY day ASC;