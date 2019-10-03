const express = require('express');
const server = express();


server.get('/', (req, res) => {
    res.send('You want home page info baby')
})

server.get('/items', (req, res) => {
    res.send('You want all the stuff baby')
})

server.listen(3000, () => {
    console.log('Hey we runnin on 3000!')
})

