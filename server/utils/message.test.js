const expect = require('expect');
var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('Should generate the correct message object', () =>{
        var from = "Bride";
        var text = "I'm going to kill Bill";
        var jaoh = generateMessage(from, text);

        expect(jaoh.createdAt).toBeA('number')
        expect(jaoh).toInclude({from, text})
    });
});