import express from 'express';
import {sequelize,authenticateDatabase} from './models/database.js';
import Task from './models/task.js';
import Users from './models/users.js';
import router from './routes/routes.js';
import cors from 'cors';
const port = 3001;
const app = express();

authenticateDatabase();
sequelize.sync();
app.use(cors());
app.use('/', router);
app.listen(port, ()=>{ console.log(`listening on port ${port}`);})

// app.get('/',(req,res)=>{ res.send('hello')})