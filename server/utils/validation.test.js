const expect = require('expect');

const {isRealString} = require('./validation');

// isRealString
    // should reject non-string values
    // should reject string with only spaces
    // should allow string with non-space characters

describe('isRealString', () => {
    it('should reject non-string values', () => {
        var res = isRealString(98);
        expect(res).toBe(false);
    });

    it('should reject string with only spaces', () => {
        expect(isRealString('    ')).toBe(false);
    });

    it('should allow string with non spaces characters', () => {
        expect(isRealString('qwerstgdb')).toBe(true);
    });
});
