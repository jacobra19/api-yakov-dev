"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComicsRouter = void 0;
const express_1 = require("express");
exports.ComicsRouter = (0, express_1.Router)();
exports.ComicsRouter.route('/')
    .get((req, res) => res.send('ComicsRouter Route!!!!'))
    .post((req, res) => res.send('ComicsRouter Route'))
    .put((req, res) => res.send('ComicsRouter Route'))
    .delete((req, res) => res.send('ComicsRouter Route'));
