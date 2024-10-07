const express = require('express');

const port = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }))


app.get('/board/page/:page', (req, res) => {
    const { page } = req.params;
    res.send(`This is page ${page}`);
});




app.listen(port, () => console.log(`Server listening on port ${port}!`));