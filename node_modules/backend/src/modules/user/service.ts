import User, { type IUser } from './schema.ts'
import { formatUserResponse } from './utils.ts'

export const createUserService = async (
    name: string,
    email: string,
    password: string
): Promise<any> => {
    if (!name || !email || !password) {
        throw new Error('Please provide email, name, password')
    }
    const existingUser = await User.findOne({ email })

    if (existingUser) {
        return {
            statusCode: 400,
            success: false,
            error: 'User already exists with this email',
        }
    }

    const user = await User.create({ name, email, password })

    return {
        statusCode: 201,
        success: true,
        data: {
            user: formatUserResponse(user),
        },
    }
}

export const updateUserService = async (
    email: string,
    params: Partial<IUser>
) => {
    const user = await User.findOneAndUpdate({ email: email }, params, {
        returnDocument: 'after',
    }).exec()
    return {
        user,
    }
}
export const login = async (email: string, password: string) => {
    const user = await User.findOne({ email }).exec()
    if (!user) {
        throw new Error('user is not available')
    }
    const _true = user.password === password
    if (!_true) {
        throw new Error('password doesnpt match')
    }
    return { user }
}
