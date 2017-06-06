const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString Function', () => {
    it('Should reject non string values', () => {
        var nonString = isRealString(399291);
        expect(nonString).toBe(false);
    });
    it('Should reject string with only spaces', () => {
        var onlySpaces = isRealString('        ');
        expect(onlySpaces).toBe(false);
    });
    it('Should allow string with non-space characters', () => {
        var acceptableString = isRealString("Stefflon Don - Real Ting");
        expect(acceptableString).toBe(true);
    });
    it('Should trim beginning and ending spaces', () => {
        var excessSpace = isRealString('   Two-Mix    ');
        expect(excessSpace).toBe(true);
    });
});