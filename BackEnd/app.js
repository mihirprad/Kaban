import express from 'express';
import {authenticateDatabase} from './models/database.js'
const port = 3001;
const app = express();

authenticateDatabase();
app.listen(port, ()=>{ console.log(`listening on port ${port}`);})

app.get('/',(req,res)=>{ res.send('hello')})