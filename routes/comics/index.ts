import { Router } from 'express'

export const ComicsRouter = Router()

ComicsRouter.route('/')
    .get((req, res) => res.send('ComicsRouter Route!!!!'))
    .post((req, res) => res.send('ComicsRouter Route'))
    .put((req, res) => res.send('ComicsRouter Route'))
    .delete((req, res) => res.send('ComicsRouter Route'))
