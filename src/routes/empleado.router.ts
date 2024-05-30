import { Router } from "express";
import { createEmpleado } from "../controllers/empleado.controller";

const router = Router()

router.post("/empleados", createEmpleado)

export default router