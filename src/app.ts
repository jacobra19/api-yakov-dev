import express, { Router } from 'express';

import { ComicsRouter } from './routes/comics';
import { FamilyTreeRouter } from './routes/family-tree';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Home Page Route'));

app.get('/about', (req, res) => res.send('About Page Route'));

app.get('/portfolio', (req, res) => res.send('Portfolio Page Route'));

app.get('/contact', (req, res) => res.send('Contact Page Route'));

app.use('/comics', ComicsRouter);
app.use('/family-tree', FamilyTreeRouter);

app.listen(port, () =>
	console.log(`Server running on ${port}, http://localhost:${port}`)
);
