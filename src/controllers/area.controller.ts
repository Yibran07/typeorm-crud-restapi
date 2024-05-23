import { Request, Response } from "express";
import { Area } from "../entity/Area";
import { Edificio } from "../entity/Edificio";

export const getAreas = async (req: Request, res: Response) => {
  try {
    const listaAreas = await Area.find();
    return res.json(listaAreas);
  } catch (error) {
    if (error instanceof Error)
      return res.status(500).json({ message: error.message });
  }
};

export const createArea = async (req: Request, res: Response) => {
  try {
    console.log(req.body);

    const { nombre, descripcion, edificio } = req.body;
    const area = new Area();

    area.nombre = nombre;
    area.descripcion = descripcion;
    area.edificio = edificio;

    await area.save(); //sepone await porque la funcion es asincrona
  } catch (error) {
    if (error instanceof Error)
      return res.status(500).json({ message: error.message });
  }
};
