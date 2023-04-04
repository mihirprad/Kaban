import express from 'express';
import {sequelize,authenticateDatabase} from './models/database.js';
import Task from './models/task.js';
const port = 3001;
const app = express();

authenticateDatabase();
sequelize.sync();
app.listen(port, ()=>{ console.log(`listening on port ${port}`);})

app.get('/',(req,res)=>{ res.send('hello')})