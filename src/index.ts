import "reflect-metadata"
import app from "./app"
import {AppDataSource} from './db'

//función que arranca todo el proyecto
async function main() {
    try {
        await AppDataSource.initialize(); //inicializar la base de datos
        console.log("Base de datos conectada")
        app.listen(3000)
        console.log('Server esta escuchando en el puerto', 3000)    
    } catch (error) {
        console.error(error)
    }
}

main()
