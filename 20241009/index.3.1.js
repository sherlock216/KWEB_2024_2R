const express = require('express');

const port = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    const obj = req.query;
    const getResult = Object.keys(obj).map(k => `${k}: ${obj[k]}`).join('\n');
    res.send(`GET results: ${getResult}`);
});

app.post('/', (req, res) => {
    const obj = req.body;
    const postResult = Object.keys(obj).map(k => `${k}: ${obj[k]}`).join('\n');
    res.send(`POST results: ${postResult}`);
});

app.put('/', (req, res) => {
    const obj = req.body;
    const putResult = Object.keys(obj).map(k => `${k}: ${obj[k]}`).join('\n');
    res.send(`PUT results: ${putResult}`);
});

app.delete('/', (req, res) => {
    const obj = req.body;
    const deleteResult = Object.keys(obj).map(k => `${k}: ${obj[k]}`).join('\n');
    res.send(`DELETE results: ${deleteResult}`);
});




app.listen(port, () => console.log(`Server listening on port ${port}!`));