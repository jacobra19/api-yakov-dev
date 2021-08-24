"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const comics_1 = require("./routes/comics");
const family_tree_1 = require("./routes/family-tree");
const app = express_1.default();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => res.send('Home Page Route'));
app.get('/about', (req, res) => res.send('About Page Route'));
app.get('/portfolio', (req, res) => res.send('Portfolio Page Route'));
app.get('/contact', (req, res) => res.send('Contact Page Route'));
app.use('/comics', comics_1.ComicsRouter);
app.use('/family-tree', family_tree_1.FamilyTreeRouter);
app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));
//# sourceMappingURL=app.js.map