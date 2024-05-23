import { DataSource } from "typeorm";
import { User } from "../src/entity/User";
import { Empleado } from "./entity/Empleado";
import { Area } from "./entity/Area";
import { Vale } from "./entity/Vale";
import { Edificio } from "./entity/Edificio";

// export const AppDataSource = new DataSource({
//   type: "postgres",
//   host: "localhost",
//   username: "administrador",
//   password: "administrador",
//   port: 5432,
//   database: "db_sice",
//   entities: [User, Empleado, Area, Vale, Edificio],
//   logging: true,
//   synchronize: true,
// });

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "monorail.proxy.rlwy.net",
  username: "postgres",
  password: "fbwwsgLClCImXlbXxzbdNxBMuCryShgi",
  port: 54578,
  database: "railway",
  entities: [User, Empleado, Area, Vale, Edificio],
  logging: true,
  synchronize: true,
});
