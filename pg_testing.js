import {pgPool} from './pg_connection.js'

//somehing given by the user
let school = 'University of Oulu';
let addr = 'Someroad 5';

try{
    const result =  await pgPool.query('INSERT INTO school VALUES ($1,$2)', [school, addr] );
    console.log(result.rows);
       
}catch(e){
    console.log(e.message); 
}
