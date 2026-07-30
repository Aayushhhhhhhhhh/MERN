///routes handlers
import { Router } from 'express'
import { createUser } from './controller.ts'

const userRoutes = Router()

userRoutes.post('/createUser', createUser)

export default userRoutes
