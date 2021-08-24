"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getComics_1 = require("./routes/comics/getComics/getComics");
const app = express_1.default();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => res.send('Home Page Route'));
app.get('/about', (req, res) => res.send('About Page Route'));
app.get('/portfolio', (req, res) => res.send('Portfolio Page Route'));
app.get('/contact', (req, res) => res.send('Contact Page Route'));
app.get('/comics', getComics_1.getComics);
app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));
//# sourceMappingURL=app.js.map