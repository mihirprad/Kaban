import { sequelize } from "./database.js";
import { DataTypes,Model } from "sequelize";
import Users from "./users.js";
class Boards extends Model{}

Boards.init({
    description: DataTypes.STRING,
    title: DataTypes.STRING,

}, {sequelize, modelName:'Boards'});
Boards.belongsTo(Users, { foreignKey: 'user_id' });

export default Boards;