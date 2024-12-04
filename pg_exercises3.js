import { pgPool } from "./pg_connection.js";

getByKeyword('sa');

async function getEmployeeNames(){
    try {
        const result = await pgPool.query('SELECT last_name lname, first_name fname, age FROM employee');
        console.log(result.rows);
        
        for (const row of result.rows) {

            // console.log(`${row.fname} ${row.lname} ${row.age}`); 
        }
    } catch (error) {
        console.log(error.message);   
    }
}

async function getByKeyword(keyword){
    try {
        const result = await pgPool.query('SELECT username, age  FROM employee');
   
        const filtered = result.rows.filter(r => r.username.includes(keyword));        

        let sum = 0;
        filtered.forEach(r => sum += r.age);

        console.log(filtered);
        console.log(sum);
        
        

    } catch (error) {
        console.log(error.message);   
    }
}