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

// App.get('/addUser', (req,res) => {
    
// })

App.get('/user/:name', (req, res) => {
    console.log(req.params.name);
    res.send('USER ENDPOINT RES SEND SUCCESS');
})



App.listen(3001, () => {
    console.log('Listening on Port 3001')
});