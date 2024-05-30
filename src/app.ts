import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import userRoutes from './routes/user.routes'
import valeRoutes from './routes/vale.router'
import empleadoRoutes from './routes/empleado.router'
import { validateHeaderName } from 'http'

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json()) //antes de pasar por las rutas, entender las peticiones json como post, get, update, delete

app.use(userRoutes)
app.use(valeRoutes)
app.use(empleadoRoutes)

export default app;
