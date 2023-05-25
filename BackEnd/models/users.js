import { sequelize } from "./database.js";
import { DataTypes,Model } from "sequelize";

class Users extends Model{}

Users.init({
    password: {type: DataTypes.STRING.BINARY, allowNull: false},
    username: {type: DataTypes.STRING, allowNull: false},

}, {sequelize, modelName:'Users'});

export default Users;