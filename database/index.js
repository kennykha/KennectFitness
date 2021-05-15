const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'freshshoe465',
    database: 'kennectfitness'
})

connection.connect();

const getUsers = (callback) => {
    connection.query('SELECT * FROM USERS', (err, result) => {
        if (err) {
            callback(err);
        } else {
            callback(null, result);
        }
    })
}

const testUsers = () => {
    console.log('test')
}

module.exports = {getUsers, testUsers}