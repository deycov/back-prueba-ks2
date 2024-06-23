import database from "./database.js";
import { DataTypes } from "sequelize";

const Users = database.define("users", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
  }},
  {
    timestamps: true
  }
);

export default Users;