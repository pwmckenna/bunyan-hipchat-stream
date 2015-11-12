'use strict';

var https = require('https');

function BunyanHipchatStream(organization, token, room) {
    this.organization = organization;
    this.token = token;
    this.room = room;
}

BunyanHipchatStream.prototype.write = function (json) {
    var body = JSON.stringify({
        "color": json.level >= 40 ? 'red' : 'green',
        "message": "<pre>" + JSON.stringify(json, null, 4) + "</pre>",
        "notify": true,
        "message_format": "html"
    });
    https.request({
        method: 'POST',
        hostname: this.organization + '.hipchat.com',
        path: '/v2/room/' + this.room + '/notification?auth_token=' + this.token,
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': body.length
        }
    }).write(body);
}

module.exports = BunyanHipchatStream;
