import express from 'express';
import {getComics} from './routes/comics/getComics/getComics';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Home Page Route'));

app.get('/about', (req, res) => res.send('About Page Route'));

app.get('/portfolio', (req, res) => res.send('Portfolio Page Route'));

app.get('/contact', (req, res) => res.send('Contact Page Route'));

app.get('/comics', getComics);


app.listen(port, () =>
	console.log(`Server running on ${port}, http://localhost:${port}`)
);
