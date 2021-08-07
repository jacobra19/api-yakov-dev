// import express from 'express'
// import cron from 'node-cron'

// const app = express();

// app.get('/', (req, res) => res.send('Home Page Route'));

// app.get('/about', (req, res) => res.send('About Page Route'));

// app.get('/portfolio', (req, res) => res.send('Portfolio Page Route'));

// app.get('/contact', (req, res) => res.send('Contact Page Route'));

// const port = process.env.PORT || 3000;

// cron.schedule('*/10 * * * * *', () => {
//     console.log('running a task every minute');
// });



// app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));

import express from "express";
const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
app.get("/", (req, res) => {
    // render the index template
    res.send("index");
});

// start the express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});