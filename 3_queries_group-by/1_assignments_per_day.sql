SELECT day, count(*) AS total_assignemnts
FROM assignments
GROUP BY day
ORDER BY day ASC;