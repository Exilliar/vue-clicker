const express = require('express');
const app = express()
const port = 3000;

const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/items', (req, res) => {
    const items = [{
        id: 0,
        name: "Item 1",
        total: 0,
        clickValue: 1,
        clickTime: 1,
        cost: 50,
        unlocked: true,
        intervalID: undefined
      }, {
        id: 1,
        name: "Item 2",
        total: 0,
        clickValue: 4,
        clickTime: 2,
        cost: 100,
        unlocked: true,
        intervalID: undefined
      }, {
        id: 2,
        name: "Item 3",
        total: 0,
        clickValue: 8,
        clickTime: 3,
        cost: 150,
        unlocked: false,
        intervalID: undefined
    }];

    res.send(items);
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
})