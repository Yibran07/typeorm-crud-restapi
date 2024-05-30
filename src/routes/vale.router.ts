import { Router } from "express";
import { createVale } from "../controllers/vale.controller";


const router = Router()

router.post("/vales", createVale)

export default router