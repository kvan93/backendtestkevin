/*jslint es6 */
/*global console, require,process*/
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET", "PUT", "POST", "DELETE", "OPTIONS");
    next();
});  
const bodyParser = require('body-parser');
app.use(bodyParser.json());
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

app.get('/pokedex', function (res) {
    "use strict";
    pool.query('SELECT * FROM pokedex', function (err, res2) {
        console.log(res2);
        res.send(JSON.stringify(res2.rows));
    });
});

app.post('/pokedex/new', function (req, res) {
    "use strict";
    console.log(req.body.naam);
    let query = `insert into pokedex(naam,types,zwaktes) values ('${req.body.naam}', '${req.body.types}', '${req.body.zwaktes}')`;
    pool.query(query, function (error, results, fields) {
        if (error) throw error;
        res.end("Nieuwe pokemon erbij!");
    });
});

app.listen(port, function () {
    "use strict";
    console.log(`App Server luistert op poort ${port}`);
});