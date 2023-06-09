import { sequelize } from "./database.js";
import { DataTypes,Model } from "sequelize";

class User extends Model{}

User.init({
    password: {type: DataTypes.STRING.BINARY, allowNull: false},
    username: {type: DataTypes.STRING, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false},
}, {sequelize, modelName:'Users'});

export default User;