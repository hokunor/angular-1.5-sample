const express = require('express');

module.exports = (PORT) => {
    const app = express();
    const music = require('./rest/music.js');
    app.all('*', function (req, res, next) {
        setTimeout(function () {
            next();
        }, 10000); // 3 seconds
    });
    app.use('/api/music', function (req, res, next) {
        res.send(music);
        next();
    });
    app.listen(PORT, () => {
        console.log(`Backend  rest mock server listening to port ${PORT}`)
    })
};