var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);

    alexa.dynamoDBTableName = 'YourTableName'; // creates new table for userid:session.attributes

    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('MyIntent');
    },

    'MyIntent': function () {
        this.emit(':tell', 'Hello World from Alexa!');
    },

    'WhatsUpIntent': function () {
        this.emit(':ask', 'Not much', 'what\'s up?');
    },

    'MyNameIsIntent': function () {
        var myName = this.event.request.intent.slots.firstname.value;
        this.emit(':ask', 'hello, ' + myName, 'try again');
    },

    'AMAZON.HelpIntent': function () {
        this.emit(':ask', 'HelpIntent');
    },

    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'StopIntent');
    },

    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'CancelIntent');
    }
};
