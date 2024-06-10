import {Sequelize } from 'sequelize';
const  username:string = "postgres"
const  password:string = "admin"
const  dbname :string = "hehe"
const  host:string = "localhost"
const port:number = 5432
const  dialect = "postgres"

const sequelizeConn = new Sequelize(
    dbname, username, password, {host : host, dialect : dialect, port : port}
)
export default  sequelizeConn