# Usage
```js
var BunyanHipchatStream = require('bunyan-hipchat-stream');
var bunyan = require('bunyan');
var logger = bunyan.createLogger({
    name: 'test',
    streams: [
        {
            level: 'trace',
            stream: process.stdout
        },
        {
            level: 'trace',
            stream: new BunyanHipchatStream(config.organization, config.token, config.room),
            type: 'raw'
        }
    ]
});
```
