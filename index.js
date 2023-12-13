const express = require("express");
const router = require('./app/router')
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.json());
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router)

app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/views');

app.listen(8080, () => {
    console.log("Server Started");
});