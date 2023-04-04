const express = require('express');
const app = express();

const port = 3001;

app.listen(port, ()=>{ console.log(`listening on port ${port}`);})

app.get('/',(req,res)=>{ res.send('hello')})