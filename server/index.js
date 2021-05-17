const express = require('express');
const path = require('path');
const App = express();
const db = require('../database/index');

App.use(express.json());

App.get('/', (req, res) => {
    res.status(200).send('Root end point hit');
})

App.get('/getUsers', (req,res) => {
    console.log('Hit getUsers endpoint')
    db.getUsers((err, result) => {
        if (err) {
            res.status(404).send('Cannot retrieve users')
        } else {
            res.status(200).send(result);
        }
    })
})

// App.get('/:user', (req, res) => {
//     console.log('User endpoint hit');
//     res.send();
// })

App.listen(3001, () => {
    console.log('Listening on Port 3001')
});