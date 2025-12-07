import {  DataTypes } from "sequelize";
import bcrypt from "bcrypt";
import sequelize from "../config/database.js";
import Task from "./Tasks.js";

const User =sequelize.define("User",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey: true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,

    },
    
   

    createdAt:{
        type:DataTypes.DATE,
        defaultValue:DataTypes.NOW,
    },
     
},{
    tableName:"user",
    timestamps:false,
});

User.beforeCreate(async(user)=>{
    const salt = await bcrypt.genSalt(10);
    user.password=await bcrypt.hash(user.password,salt);
});
User.hasMany(Task, { foreignKey: "user_id" });
Task.belongsTo(User, { foreignKey: "user_id" });


export default User;