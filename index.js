const AWS = require('aws-sdk');

AWS.config.update({region: 'us-west-2'});

let params = {
    Destination: {
        ToAddresses: [
            'cok.kike@gmail.com'
        ]
    },
    Message: {
        Body: {
            Text: {
                Charset: 'UTF-8',
                Data: 'Body data, text format'
            }
        },
        Subject: {
            Charset: 'UTF-8',
            Data: 'Test email'
        }
    },
    Source: 'olima@pidelorapido.com'
};

let sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();

sendPromise
.then(data => {
    console.log(data.MessageId);
})
.catch(error => {
    console.error(error, error.stack);
})