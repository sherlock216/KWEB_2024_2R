const express = require('express');
const { runQuery } = require('./5.3.pool');

const port = 3000;
const app = express();


// 실행은 잘 되는데, Group by가 헷갈리고 왜 쓰는건지 모르겠는데 이렇게 쓰는게 맞나요?
// (이 상황에서는 sum할 때 필요하다는 정도로만 알고 있습니다)
app.get('/fare', async (req, res) => {
    const uid = parseInt(req.query.uid);

    try {
        const sql = `SELECT users.name, SUM(ROUND((types.fare_rate / 100) * (trains.distance * 0.1))) AS fare FROM tickets
        JOIN users ON tickets.user = users.id
        JOIN trains ON tickets.train = trains.id
        JOIN types ON trains.type = types.id
        WHERE users.id = ?
        GROUP BY users.id`;
        const results = await runQuery(sql, [uid]);
        const user = results[0];
        res.send(`Total fare of ${user.name} is ${user.fare} KRW.`);
    } catch (error) {
        console.error('Error: ', error);
        res.status(500).send('500 Internal Server Error');
    }
});

// 실행은 잘 되는데, 여기도 GROUP BY 에 trains.id를 쓰는게 맞는지 모르겠습니다
// (count때문에 필요하다고만 알고 있습니다)
app.get('/train/status', async (req, res) => {
    const tid = parseInt(req.query.tid);
    
    try {
        const sql = `SELECT trains.id, types.max_seats, COUNT(tickets.id) AS occupied FROM trains
                    JOIN types ON trains.type = types.id
                    LEFT JOIN tickets ON trains.id = tickets.train
                    WHERE trains.id = ?
                    GROUP BY trains.id`;
        const results = await runQuery(sql, [tid]);
        const train = results[0];
        const status = train.occupied >= train.max_seats ? 'sold out' : 'not sold out';
        res.send(`Train ${train.id} is ${status}`);
    } catch {
        console.error('Error', error);
        res.status(500).send('500 Internal Server Error');
    }
});



app.listen(port, () => console.log(`Server listening on port ${port}!`));