import express from 'express';
import session from 'express-session';
import {sequelize,authenticateDatabase} from './models/database.js';
import router from './routes/routes.js';
import cors from 'cors';
const port = 3001;
const app = express();

app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false
  }));

authenticateDatabase();
sequelize.sync();
app.use(express.json());
app.use(cors());
app.use('/api', router);
app.listen(port, ()=>{ console.log(`listening on port ${port}`);})

// app.get('/',(req,res)=>{ res.send('hello')})