import { Request, Response } from "express";
import { Vale } from "../entity/Vale";

export const getVales = async (req: Request, res: Response) => {
  try {
    const listaVales = await Vale.find();
    return res.json(listaVales);
  } catch (error) {
    if (error instanceof Error)
      return res.status(500).json({ message: error.message });
  }
};

export const createVale = async (req: Request, res: Response) => {
  try {
    console.log(req.body);

    const { num_serie, unidad, modelo, marca } = req.body;
    const vale = new Vale();

    vale.num_serie = num_serie;
    vale.unidad = unidad;
    vale.modelo = modelo;
    vale.marca = marca;

    await vale.save(); //sepone await porque la funcion es asincrona
  } catch (error) {
    if (error instanceof Error)
      return res.status(500).json({ message: error.message });
  }
};

export const updateVale = async (req: Request, res: Response) => {
  try {
    console.log(req.body);

    const { id } = req.params;
    const { num_serie, unidad, modelo, marca } = req.body;
    const vale = Vale.createQueryBuilder()
      .update(Vale)
      .set({ num_serie, unidad, modelo, marca });
  } catch (error) {
    if (error instanceof Error)
      return res.status(500).json({ message: error.message });
  }
};
