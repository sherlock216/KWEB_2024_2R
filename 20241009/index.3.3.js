const express = require('express');

const port = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }))


app.get('/factorial', (req, res) => {
    const { number } = req.query;
    res.redirect(`/factorial/${number}`);
})


app.get('/factorial/:number', (req, res) => {
    const { number } = req.params;
    let total = 1; 
    for(let i=1;i<=number;i++){
        total *= i;
    }
    res.send(`The result is ${total}`);
});




app.listen(port, () => console.log(`Server listening on port ${port}!`));