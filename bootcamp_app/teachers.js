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

const cohortName = process.argv[2] || 'JUL02';
const values = [`${cohortName}`];


const queryString = `
SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohort
FROM assistance_requests
JOIN teachers ON teachers.id = teacher_id
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name = $1
ORDER BY teachers.name;
`;


pool.query(queryString, values)
.then(res => {
    // console.log(res.rows);
    res.rows.forEach(user => {
        console.log(`${user.cohort}: ${user.teacher}`);
    })
})
.catch(err => console.error('query error', err.stack));