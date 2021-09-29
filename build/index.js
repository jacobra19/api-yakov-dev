"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const comics_1 = require("./routes/comics");
const family_tree_1 = require("./routes/family-tree");
exports.app = (0, express_1.default)();
const port = process.env.PORT || 3000;
exports.app.get('/', (req, res) => res.send('Home Page Route'));
exports.app.use(express_1.default.json());
exports.app.use('/comics', comics_1.ComicsRouter);
exports.app.use('/family-tree', family_tree_1.FamilyTreeRouter);
exports.app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));
