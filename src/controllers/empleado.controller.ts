import { Request, Response } from "express";
import { User } from "../entity/User";
import { Vale } from "../entity/Vale";
import { Empleado } from "../entity/Empleado";


export const createEmpleado = async (req: Request, res: Response) => {
    try {
        const { idUsuario, nombre, ap_paterno, ap_materno, telefono, idVale } = req.body
        
        //1. buscar usuario por id
        const user = await User.findBy({id: idUsuario})
        if(!user)
            return res.status(404).json({message: "Usuario no encontrado"})

        //2. buscar vale por id
        const vale = await Vale.findBy({id: idVale})
        if(!vale)
            return res.status(404).json({message: "Vale no encontrado"})

        const empleado = new Empleado()
        empleado.nombre = nombre
        empleado.ap_paterno = ap_paterno
        empleado.ap_materno = ap_materno
        empleado.telefono = telefono
        empleado.usuario = idUsuario
        empleado.vale = idVale

        await empleado.save()
        return res.json(empleado)

    } catch(error) {
        if(error instanceof Error) {
            res.status(500).json({message: error.message})
        }
    }
}

