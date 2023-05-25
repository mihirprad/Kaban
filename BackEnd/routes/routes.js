import express from 'express';
import * as tasksController from '../controllers/tasksController.js'
const router = express.Router();

router.get('/tasks', tasksController.getAllTasks);


export default router;