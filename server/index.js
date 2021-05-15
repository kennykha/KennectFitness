const express = require('express');
const path = require('path');
const App = express();
const db = require('../database/index');


// App.use(express.static(path.join(__dirname, '../', '/build')))
// App.use(express.static(path.join(__dirname, '../', '/public')))
App.use(express.json());

App.get('/', (req, res) => {
    // console.log(path.join(__dirname, '../', '/public/index.html'));
    // res.sendFile(path.join(__dirname, '../public', 'index.html'));
    res.status(200).send('Root end point hit');
})

App.get('/test', (req,res) => {
    console.log('hello')
    console.log(db)
    db.getUsers((err, result) => {
        if (err) {
            res.status(404).send('Cannot retrieve users')
        } else {
            res.status(200).send(result);
        }
    })
})

App.listen(3001, () => {
    console.log('Listening on Port 3001')
});