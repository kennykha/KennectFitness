const express = require('express');
const path = require('path');
const App = express();

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
    res.status(200).json({test: 1});
})

App.listen(3001, () => {
    console.log('Listening on Port 3001')
});