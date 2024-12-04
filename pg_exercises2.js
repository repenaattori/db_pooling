import { pgPool } from "./pg_connection.js";


//delUser('samppa');
//updateCompany('sara', 'OAMK');
delCompany('OAMK');


async function delUser(username){
    try {
        await pgPool.query('DELETE FROM employee WHERE username=$1', [username]);
    } catch (error) {
        console.log(error.message);
        
    }
}

async function delCompany(company){
    try {
        await pgPool.query('DELETE FROM company WHERE company_name=$1', [company]);
    } catch (error) {
        console.log(error.message);
    }
}


async function updateCompany(username, company){
    try {
        await pgPool.query('UPDATE employee SET company=$1 WHERE username=$2', [company, username]);
    } catch (error) {
        console.log(error.message);
        
    }
}