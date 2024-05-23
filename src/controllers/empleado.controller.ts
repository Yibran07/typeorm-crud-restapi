import { Request, Response } from "express";
import { Empleado } from "../entity/Empleado";
import { Edificio } from "../entity/Edificio";

export const getEmpleados = async (req: Request, res: Response) => {
  try {
    const listaEmpleados = await Empleado.find();
    return res.json(listaEmpleados);
  } catch (error) {
    if (error instanceof Error)
      return res.status(500).json({ message: error.message });
  }
};

export const createEmpleado = async (req: Request, res: Response) => {
  try {
    console.log(req.body);

    const { nombre, ap_paterno, ap_materno, telefono, user, vale } = req.body;
    const empleado = new Empleado();

    empleado.nombre = nombre;
    empleado.ap_paterno = ap_paterno;
    empleado.ap_materno = ap_materno;
    empleado.telefono = telefono;
    empleado.user = user;
    empleado.vale = vale;

    await empleado.save(); //sepone await porque la funcion es asincrona
  } catch (error) {
    if (error instanceof Error)
      return res.status(500).json({ message: error.message });
  }
};
