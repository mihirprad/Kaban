import Task from "../models/task.js";

export const getAllTasks = (req,res)=>{
    
    let tasks = Task.findAll();

    const users = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
        { id: 3, name: 'Bob' }
      ];
    
    res.json(users);
}