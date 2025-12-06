import {DataTypes} from "sequelize";
import sequelize from "../config/database.js";


const Tasks =sequelize.define("Tasks",{
  
    user_id:{
         type:DataTypes.INTEGER,
         autoIncrement:true,
         primaryKey:true
        
            },
    title:{
        type:DataTypes.STRING,
        
    }
       
})



