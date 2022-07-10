const expect = require("chai").expect;
const { polybius } = require("../src/polybius");

describe('polybius', () => {
    it("should encode a message into numbers according to the polybius grid", () => {
        const actual = polybius('test');
        const expected = '44513444';
        expect(actual).to.equal(expected);
    });
    it("should translate both 'i' and 'j' to 42", () => {
        const actual = polybius('jim');
        const expected = '424223';
        expect(actual).to.equal(expected);
    });
    it("should maintain spaces as is", () => {
        const actual = polybius('sample text');
        const expected = '341123531351 44513544';
        expect(actual).to.equal(expected);
    });
    it("should decode a message into letter from numbers according to polybius grid", () => {
        const actual = polybius('341123531351', false);
        const expected = 'sample';
        expect(actual).to.equal(expected);
    });
    it("should translate 42 to both 'i' and 'j'", () => {
        const actual = polybius('4254423151', false);
        const expected = "ijuijce";
        expect(actual).to.equal(expected);
    });
    it("should leave spaces maintained when decoding", () => {
        const actual = polybius('341123531351 44513544', false);
        const expected = "sample text";
        expect(actual).to.equal(expected);
    });
    it("should return false if length of numbers in input message are odd", () => {
        const actual = polybius('1234567', false);
        const expected = false;
        expect(actual).to.equal(expected);
    });
})