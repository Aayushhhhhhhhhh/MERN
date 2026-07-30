export const formatUserResponse = (user: any): any => ({
    _id: user._id.toString(),
    name: user.name,
    email: user.email,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
})

