import { DataSource } from "typeorm";
import { User } from "../src/entity/User";
import { Edificio } from "../src/entity/Edificio";
import { Area } from "../src/entity/Area";
import { Empleado } from "./entity/Empleado";
import { Vale } from "./entity/Vale";

/*
export const AppDataSource =  new DataSource({
    type: 'postgres',
    host: 'localhost',
    username: 'administrador',
    password: 'administrador',
    port: 5432,
    database: 'db_sice',
    entities: [User, Edificio, Area, Empleado, Vale],
    logging: true,
    synchronize: true //lee las entidades y vulve a crearlas en la base de datos
})
*/

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "viaduct.proxy.rlwy.net",
  username: "postgres",
  password: "yhJsJQsocbimYeKTdIZurfNUcjWlZwYm",
  port: 52049,
  database: "railway",
  entities: [User, Edificio, Area, Empleado, Vale],
  logging: true,
  synchronize: true, //lee las entidades y vulve a crearlas en la base de datos
});
