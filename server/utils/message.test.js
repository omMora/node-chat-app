var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('Should generate correct message object', () => {
        // store res in variable
        // assert from match
        // assert text match
        // assert createdAt is number

        var from = 'Jen';
        var text = 'Some message';
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message.from).toBe(from);
        expect(message.text).toBe(text);
        // expect(message).toInclude({from, text});
    });
});
