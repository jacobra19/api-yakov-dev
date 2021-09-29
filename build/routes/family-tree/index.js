"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FamilyTreeRouter = void 0;
const express_1 = require("express");
const getMembers_1 = __importDefault(require("./getMembers/getMembers"));
exports.FamilyTreeRouter = (0, express_1.Router)();
exports.FamilyTreeRouter.route('/members')
    .post(getMembers_1.default)
    // .post((req, res) => res.send('Family Page Route'))
    .put((req, res) => res.send('Family Page Route'))
    .delete((req, res) => res.send('Family Page Route'));
exports.FamilyTreeRouter.route('/:id')
    .get((req, res) => {
    console.log(`req.query`, req.query);
    console.log(`req.params.id`, req.params.id);
    return res.send('Family Page Route!!!! ' + req.params.id);
})
    .post((req, res) => res.send('Family Page Route'))
    .put((req, res) => res.send('Family Page Route'))
    .delete((req, res) => res.send('Family Page Route'));
