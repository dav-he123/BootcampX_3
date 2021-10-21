const { Pool } = require('pg')

const pool = new Pool({
    user: 'davidhe',
    password: '123',
    host: 'localhost',
    database: 'bootcampx'
  })


pool.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});


pool.query(`
SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohort
FROM assistance_requests
JOIN teachers ON teachers.id = teacher_id
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name = '${process.argv[2] || 'JUL02'}'
ORDER BY teachers.name;
`)
.then(res => {
    // console.log(res.rows);
    res.rows.forEach(user => {
        console.log(`${user.cohort}: ${user.teacher}`);
    })
})
.catch(err => console.error('query error', err.stack));