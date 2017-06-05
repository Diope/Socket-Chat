const moment = require('moment');

var time = new Date().getTime

var generateMessage = (from, text) => {
    return {
        from,
        text,
        createdAt: moment().valueOf(time)
    };
};

var generateLocationMessage = (from, latitude, longitude) => {
    return {
        from,
        url: `https://www.google.com/maps?q=${latitude},${longitude}`,
        createdAt: moment().valueOf(time)
    }
}
module.exports = {generateMessage, generateLocationMessage};