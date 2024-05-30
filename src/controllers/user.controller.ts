import { Request, Response } from "express"
import { User } from "../entity/User"

export const getUsers = async (req: Request, res: Response) => {
    try {
        const listaUsers = await User.find()
        return res.json(listaUsers)
    } catch (error) {
        if (error instanceof Error)
            return res.status(500).json({ message: error.message })
    }

}

//se colocar async para ocupar la funcion asincrona await
export const createUser = async (req: Request, res: Response) => {
    try { // el try-chatch evita que se detenga el servidor cuando hay un error
        console.log(req.body)

        //const { nombre, ap_paterno, ap_materno } = req.body
        const { correo_electronico, contrasenia } = req.body
        const user = new User()
        
        //user.nombre = nombre
        //user.ap_paterno = ap_paterno
        //user.ap_materno = ap_materno
        user.correo_electronico = correo_electronico
        user.contrasenia = contrasenia

        await user.save() //se pone await porque la funcion es asincrona

        //res.send("hello word");
        //regresarle al usuario el objeto creado
        return res.json(user)
    } catch (error) {
        if (error instanceof Error)
            return res.status(500).json({ message: error.message })
    }
}

export const updateUser = async (req: Request, res: Response) => {

    try {
        const { id } = req.params

        const user = await User.findBy({ id: parseInt(req.params.id) })

        if (!user)
            return res.status(404).json({ message: "El usuario no existe" })

        await User.update({ id: parseInt(id) }, req.body)

        res.sendStatus(204)
    } catch (error) {
        if (error instanceof Error)
            return res.status(500).json({ message: error.message })
    }

}

export const deleteUser = async (req: Request, res: Response) => {

    try {
        const id = req.params.id

        const result = await User.delete({ id: parseInt(id) })

        if (result.affected == 0) {
            res.status(404).json({ message: "Usuario no encontrado" })
        }

        return res.sendStatus(204)
    } catch (error) {
        if (error instanceof Error)
            return res.status(500).json({ message: error.message })
    }

}