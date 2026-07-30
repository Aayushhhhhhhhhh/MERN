import express from 'express'
import bodyParser from 'body-parser'
import type { Express, Request, Response } from 'express'
import connectDB from './modules/config/db.ts'

const app: Express = express()
app.use(bodyParser)
app.use(express.json())
const port = 3000
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

const server = async () => {
    await connectDB()
    app.listen(port, () => {
        console.log(`example app is lisgtening on port ${port}`)
    })
}

void server()


