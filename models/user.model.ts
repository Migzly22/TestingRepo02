
import { DataTypes, InitOptions, ModelAttributes, Model, Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import sequelizeConn from '../db/config';
dotenv.config();


export default class Users extends Model {
    static readonly modelName:string = "users"
    declare id:number;
    declare firstName: string;
    declare middleName: string;
    declare lastName: string;
    declare email: string;

    static associate() {
      
    }
}
let options: InitOptions = {
    sequelize: sequelizeConn,
    tableName: Users.modelName,
    schema:'public',
    paranoid : true
}

let fields:ModelAttributes = {
    id :{
      type : new DataTypes.INTEGER,
      primaryKey : true,
      autoIncrement : true
    },
    firstName :{
      type : new DataTypes.STRING,
      allowNull : true
    },
    middleName :{
      type : new DataTypes.STRING,
      allowNull : true
    },
    lastName :{
      type : new DataTypes.STRING,
      allowNull : true
    },
    email :{
      type : new DataTypes.STRING,
      allowNull : false,
      unique : true
    },
    "createdAt" :{
      type : new DataTypes.DATE,
      allowNull : true
    },
    "updatedAt" :{
      type : new DataTypes.DATE,
      allowNull : true
    },
    "deletedAt" :{
      type : new DataTypes.DATE,
      allowNull : true
    },
  }

Users.init(fields, options)