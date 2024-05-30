import { Router } from "express";
import { createUser, getUsers, updateUser, deleteUser } from '../controllers/user.controller'

const router = Router()

//router.get('/hello', (req, res) => res.send('hello word'))
router.post('/users', createUser)

router.get('/users', getUsers)

router.put('/users/:id', updateUser)

router.delete('/users/:id', deleteUser)

export default router