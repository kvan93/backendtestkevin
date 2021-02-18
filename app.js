const express = require('express');

const app = express();
const port = process.env.PORT || 80;

app.get('/', (req, res) => {
    res.send('Hello World!');
})
app.get('/test', (req, res) => {
    res.send('Test');
})
app.get('/list', (req, res) => {
    let arr = ['Kevin', 'Wesley', 'Wout'];
    res.send(JSON.stringify(arr));
})

app.listen(port, () => {
    console.log(`App Server luistert op poort ${port}`);
})