/*jslint es6 */
const express = require('express');
const app = express();
const port = process.env.PORT || 80;

const {Pool, Client} = require('pg');

const pool = new Pool({
    user: 'hrgjagyljuzxas',
    host: 'ec2-54-72-155-238.eu-west-1.compute.amazonaws.com',
    database: 'd5ifdpu5s1u9vu',
    password: 'aa6c903b19f604db8e31d348c99f66c374180b1fd87c2b69388e0f8ac79f5588',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
});

app.get('/', function (req, res) {
    "use strict";
    res.send('Hello World!');
});
app.get('/test', function (req, res) {
    "use strict";
    res.send('Test');
});
app.get('/list', function (req, res) {
    "use strict";
    pool.query('SELECT * FROM lijst', function (err, res2) {
        console.log(res2);
        res.send(JSON.stringify(res2.rows));
    });
});

app.listen(port, function () {
    "use strict";
    console.log(`App Server luistert op poort ${port}`);
});