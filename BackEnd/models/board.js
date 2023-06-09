import { sequelize } from "./database.js";
import { DataTypes,Model } from "sequelize";
import User from "./user.js";
class Board extends Model{}

Board.init({
    description: DataTypes.STRING,
    title: DataTypes.STRING,

}, {sequelize, modelName:'Boards'});
Board.belongsTo(User, { foreignKey: 'user_id' });

export default Board;