import type { Request, Response } from 'express'
import { createUserService } from './service.ts'

export const createUser = async (req: Request, res: Response) => {
    const a = req.body
    const { email, password, name } = a

    const userResponse = createUserService(name, email, password)
    res.status(201).json({ userResponse })
}

export const updateUser = async () => {}
