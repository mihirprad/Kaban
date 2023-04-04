import { sequelize } from "./database.js";
import { DataTypes,Model } from "sequelize";

class Task extends Model{}

Task.init({
    description: DataTypes.STRING,
    title: DataTypes.STRING,

}, {sequelize, modelName:'Task'});

export default Task;