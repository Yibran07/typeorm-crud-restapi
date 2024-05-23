import { Request, Response } from "express";
import { Edificio } from "../entity/Edificio";
import { Area } from "../entity/Area";

export const getEdificios = async (req: Request, res: Response) => {
  try {
    const listaEdificios = await Edificio.find();
    return res.json(listaEdificios);
  } catch (error) {
    if (error instanceof Error)
      return res.status(500).json({ message: error.message });
  }
};

export const createEdificio = async (req: Request, res: Response) => {
  try {
    console.log(req.body);

    const { nombre, planta, area } = req.body;
    const edificio = new Edificio();

    edificio.nombre = nombre;
    edificio.planta = planta;
    edificio.area = area;

    await edificio.save(); //sepone await porque la funcion es asincrona
  } catch (error) {
    if (error instanceof Error)
      return res.status(500).json({ message: error.message });
  }
};
