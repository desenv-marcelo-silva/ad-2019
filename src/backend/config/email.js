const keys = require('../../core/keys.js');
const mailgun = require("mailgun-js");
module.exports = {
    mensagens: mailgun({apiKey: keys.mailApiKEY, domain: keys.mailDOMAIN})
};