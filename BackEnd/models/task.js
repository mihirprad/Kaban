import { sequelize } from "./database.js";
import { DataTypes,Model } from "sequelize";
import User from "./user.js";
import Board from "./board.js";


class Task extends Model{}

Task.init({
    description: DataTypes.STRING,
    title: DataTypes.STRING,

}, {sequelize, modelName:'Task'});
Task.belongsTo(User, { foreignKey: 'user_id' });
Task.belongsTo(Board, { foreignKey: 'board_id' });


export default Task;