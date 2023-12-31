const express = require("express");
const router = require('./app/router')
const app = express();

app.use(express.json());
app.use('/', router)

app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/views');

app.listen(8080, () => {
    console.log("Server Started");
});