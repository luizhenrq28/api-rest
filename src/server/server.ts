import express from "express";

const app = express();

app.get('/', (req, res) => {
    console.log('first teste');
    res.send('first test');
});

export { app };