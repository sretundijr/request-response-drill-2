'use strict';

const express = require('express');

const app = express();

app.use(express.static('public'));

function setCookieValue(req) {
    let cookieVal = '';
    if (req.cookies === undefined) {
        let ranNumber = Math.floor(Math.random() * 2);
        if (ranNumber === 0) {
            cookieVal = 'a';
        } else {
            cookieVal = 'b';
        }
    }
    return cookieVal;
}

app.get('/', (req, res) => {

    res.cookie('a-b-test', setCookieValue(req));
    res.send("cookie set");
    // res.render("index");
})


// listen for requests :)
app.listen(process.env.PORT || 8080, () => console.log(
    `Your app is listening on port ${process.env.PORT || 8080}`));
