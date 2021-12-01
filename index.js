const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send({message: 'ola mundo 2'})
})

app.listen(4001, () => {
    console.log('Api anicilizadona porta 4001')
})