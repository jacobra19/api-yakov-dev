import express, { Router } from 'express'
import cors from 'cors'

import { ComicsRouter } from './routes/comics'
import { FamilyTreeRouter } from './routes/family-tree'

export const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => res.send('Home Page Route'))

app.use(express.json())
app.use(
    '/comics',
    cors({
        origin: [`http://localhost:${port}`, 'https://comics.yakov.dev'],
    }),
    ComicsRouter,
)

app.use(
    '/family-tree',
    cors({
        origin: [`http://localhost:${port}`, 'https://family-tree.yakov.dev'],
    }),
    FamilyTreeRouter,
)

app.listen(port, () =>
    console.log(`Server running on ${port}, http://localhost:${port}`),
)
