import { pgPool } from "./pg_connection.js";

const ADD_COMPANIES = "INSERT INTO company VALUES " + 
    "('OAMK', 'Kaitoväylä 1', 'Oulu')," +
    "('OSAO', 'Kotkantie 1', 'Oulu')," +
    "('Amazon', 'TechStreet', 'Washington')," +
    "('Intel', 'Phipath 4', 'New York')";

const ADD_EMPOYEES = "INSERT INTO employee VALUES " +
    "('repe', 'Reima', 'Riihimäki',22,'OAMK'),"+
    "('lisa', 'Lisa', 'Simpson',23,'Amazon'),"+
    "('sam', 'Sam', 'Theman',33,'Intel'),"+
    "('sara', 'Sara', 'Withlove', 18,'Intel')";


//addCompanies();
addEmpoyees();

async function addCompanies(){
    try {
        await pgPool.query(ADD_COMPANIES);
    } catch (error) {   
        console.log('');   
    }
}

async function addEmpoyees(){
    try {
        await pgPool.query(ADD_EMPOYEES);
    } catch (error) {   
        console.log('Cannot add same users again.');   
    }
}