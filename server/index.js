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

App.put('/addUser', (req,res) => {
    console.log(req.body.name);  
    db.addUser(req.body.name, (err, success) => {
        if (err) {
            res.status(404).send('Unable to add new user')
        } else {
            db.getUsers((err, result) => {
                if (err) {
                    res.status(404).send('Cannot retrieve users')
                } else {
                    res.status(200).send(result)
                }
            })
        }
    })  
})

App.get('/user/:name', (req, res) => {
    console.log('/user/:name endpoint reached for: ', req.params.name);
    db.getWorkouts(req.params.name, (err, success) => {
        if (err) {
            res.status(400).send('Unable to retrieve workouts');
        } else {
            res.status(200).send(success);
        }
    })
})

App.listen(3001, () => {
    console.log('Listening on Port 3001')
});