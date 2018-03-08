const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

let products = [
    {
        id: 0,
        navn: 'Børek med Spinat',
        ingredienser: [
            'Mel',
            'Egg',
            'Spinat',
            'Fetaost'
        ]
    },
    {
        id: 1,
        navn: 'Børek med Kylling',
        ingredienser: [
            'Mel',
            'Egg',
            'Tomat',
            'Kylling',
        ]
    },
    {
        id: 2,
        navn: 'Schawarma',
        ingredienser: [
            'Mel',
            'Tomat',
            'Mysteriesaus',
            'Salat',
            'Resirkulert plast',
            'Død',
        ]
    },
    {
        id: 3,
        navn: 'Innbakt pølse',
        ingredienser: [
            'Deigete ting',
            'Pølse',
        ]
    }
];

app.get('/products/', (req, res) => res.send(products));

app.listen(3000, () => console.log('Listening on port 3000!'));
