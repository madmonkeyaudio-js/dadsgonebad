const express = require('express');
const server = express();
const db = require('./models')
let cors = require('cors')


server.use(cors())

server.get('/', (req, res) => {
    res.send('You want home page info baby')
})

server.get('/fannypacks', (req, res) => {
    db.Fannypack.find()
    .then((fannypacks) => {
        res.send('hey here are your fannypacks')
    })
    .catch(err => {
        console.log(err)
    })
})

server.listen(3000, () => {
    console.log('Hey we runnin on 3000!')
})

