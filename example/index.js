var config = require('./config');
var BunyanHipchatStream = require('..');

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
logger.trace('trace');
logger.debug('debug');
logger.info('info');
logger.warn('warn');
logger.error('error');
logger.fatal({key: 'value'}, 'fatal');
