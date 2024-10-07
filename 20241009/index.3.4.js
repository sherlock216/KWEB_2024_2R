const express = require('express');

const port = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }))

app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');

app.get('/', (req, res) => res.render('index.3.4.pug'));

app.post('/login', (req, res) => {
        const { username, password } = req.body;
        res.send(`<h3>Username: ${username}</h3>
            <h3>Password: ${password}`);
});


app.listen(port, () => console.log(`Server listening on port ${port}!`));