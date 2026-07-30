import mongoose from 'mongoose'
import { MONGO_URL } from '../../environmentValidation.ts'

const connectDB = async () => {
    try {
        const conn = mongoose.connect(String(MONGO_URL))
    } catch (error) {
        process.exit(1)
    }
}
export function abc() {
    console.log('sdfnasdkj')
}
export default connectDB
