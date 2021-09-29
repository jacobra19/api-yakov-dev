import { Router } from 'express'
import getMembers from './getMembers/getMembers'
import bodyParser from 'body-parser'

export const FamilyTreeRouter = Router()

FamilyTreeRouter.route('/members')
    .post(getMembers)
    // .post((req, res) => res.send('Family Page Route'))
    .put((req, res) => res.send('Family Page Route'))
    .delete((req, res) => res.send('Family Page Route'))

FamilyTreeRouter.route('/:id')
    .get((req, res) => {
        console.log(`req.query`, req.query)
        console.log(`req.params.id`, req.params.id)
        return res.send('Family Page Route!!!! ' + req.params.id)
    })
    .post((req, res) => res.send('Family Page Route'))
    .put((req, res) => res.send('Family Page Route'))
    .delete((req, res) => res.send('Family Page Route'))
