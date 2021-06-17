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

const addUser = (name, callback) => {
    connection.query(`INSERT INTO USERS (user) VALUES ('${name}')`, (err, result) => {
        if (err) {
            callback(err);
        } else {
            callback(null, result);
        }
    })
}

const getWorkouts = (callback) => {
    connection.query('SELECT * FROM WORKOUTS', (err, result) => {
        if (err) {
            callback(err);
        } else {
            callback(null, result);
        }
    })
}

module.exports = {getUsers, addUser, getWorkouts}