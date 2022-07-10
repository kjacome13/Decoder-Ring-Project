const expect = require("chai").expect;
const { substitution } = require("../src/substitution");

describe('substitution', () => {
    it("should encode a message according to the provided alphabet", () => {
        const actual = substitution('test', "plmoknijbuhvygctfxrdzeswaq");
        const expected = 'dkrd';
        expect(actual).to.equal(expected);
    });
    it("should work with any kind of key with unique characters", () => {
        const actual = substitution('test', "plmo#nijbuhvygctfxrdzeswaq");
        const expected = 'd#rd';
        expect(actual).to.equal(expected);
    });
    it("should maintain spaces as is", () => {
        const actual = substitution('test test', "plmoknijbuhvygctfxrdzeswaq");
        const expected = 'dkrd dkrd';
        expect(actual).to.equal(expected);
    });
    it("should decode a message using the provided alphabet", () => {
        const actual = substitution('dkrd', "plmoknijbuhvygctfxrdzeswaq", false);
        const expected = 'test';
        expect(actual).to.equal(expected);
    });
    it("should work with any kind of key with unique characters while decoding", () => {
        const actual = substitution('d#rd', "plmo#nijbuhvygctfxrdzeswaq", false);
        const expected = "test";
        expect(actual).to.equal(expected);
    });
    it("should leave spaces maintained when decoding", () => {
        const actual = substitution('dkrd dkrd', "plmoknijbuhvygctfxrdzeswaq", false);
        const expected = "test test";
        expect(actual).to.equal(expected);
    });
    it("should return false if length of provided alphabet is not equal to 26", () => {
        const actual = substitution('test', "abcdefg");
        const expected = false;
        expect(actual).to.equal(expected);
    });
    it("should return false if the provided alphabet is missing", () => {
        const actual = substitution('test');
        const expected = false;
        expect(actual).to.equal(expected);
    });
    it("should return false if the provided alphabet has repeating characters", () => {
        const actual = substitution('test', "pqbhei*baabt*hiquestkplgdl");
        const expected = false;
        expect(actual).to.equal(expected);
    });
})