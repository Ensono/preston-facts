"use strict";
const Alexa = require('alexa-sdk');
const handlers = require('./handlers');
const vars = require('./constants');

exports.handler = function(event, context, callback) {
    const alexa = Alexa.handler(event, context);
    alexa.appId = vars.appId;

    alexa.registerHandlers(handlers);
    alexa.execute();
};
