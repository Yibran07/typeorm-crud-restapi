import { Request, Response } from "express"
import { Vale } from "../entity/Vale"

export const createVale = async(req: Request, res: Response) => {

    try {
        const {num_serie, unidad, modelo, marca} = req.body
        const vale = new Vale()
        vale.num_serie = num_serie
        vale.unidad = unidad
        vale.modelo = modelo
        vale.marca = marca

        await vale.save()
        return res.json(vale)

    } catch(error) {
        if(error instanceof Error) {
            return res.status(500).json({message: error.message})
        }
    }
}