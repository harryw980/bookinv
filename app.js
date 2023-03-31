const express = require('express')

const app = express();

app.get('/',(rq,res) =>{
    res.send('helloooo');
})

app.listen(3000);