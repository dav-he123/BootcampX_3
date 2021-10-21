const { Pool } = require('pg')
// const myArgs = process.argv.slice(2);
// console.log('myArgs: ', myArgs);

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

    
const cohortName = process.argv[2];
const limit = process.argv[3] || 5;
   
const values = [`%${cohortName}%`, limit];

const queryString = `
SELECT students.id, students.name, cohorts.name AS cohort
FROM students 
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name LIKE $1
LIMIT $2;
`;

pool.query(queryString, values)
.then(res => {
    // console.log(res.rows);
    res.rows.forEach(user => {
        console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort} cohort`);
    })
})
.catch(err => console.error('query error', err.stack));


