import { Router } from "express";
import {
  createUser,
  getUsers,
  updateUser,
} from "../controllers/user.controller";
import {
  createEmpleado,
  getEmpleados,
} from "../controllers/empleado.controller";
import { createVale, getVales } from "../controllers/vale.controller";

const router = Router();

router.get("/users", getUsers);
router.get("/vales", getVales);
router.get("/empleados", getEmpleados);

router.post("/users", createUser);
router.post("/vales", createVale);
router.post("/empleados", createEmpleado);

router.put("/users/${id}", updateUser);

export default router;
