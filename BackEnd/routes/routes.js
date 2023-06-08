import express from 'express';
import * as tasksController from '../controllers/tasksController.js'
import * as authController from '../controllers/authController.js'
const router = express.Router();

router.get('/tasks', tasksController.getAllTasks);
router.post('/login',authController.login);

export default router;