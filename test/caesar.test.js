const expect = require("chai").expect;
const { caesar } = require("../src/caesar");

describe('caesar', () => {
    it("should return false if shift value is unassigned", () => {
        const actual = caesar('sample text');
        const expected = false;
        expect(actual).to.equal(expected);
    });
    it("should return false if shift value is 0", () => {
        const actual = caesar('sample text', 0);
        const expected = false;
        expect(actual).to.equal(expected);
    });
    it("should return false if shift value is less than -25", () => {
        const actual = caesar('sample text', -99);
        const expected = false;
        expect(actual).to.equal(expected);
    });
    it("should return false if shift value is greater than 25", () => {
        const actual = caesar('sample text', 50);
        const expected = false;
        expect(actual).to.equal(expected);
    });
    it("should be case insensitive", () => {
        const actual = caesar('SAMPLE TEXT', 5);
        const expected = "xfruqj yjcy";
        expect(actual).to.equal(expected);
    });
    it("encode = true: should maintain all non-alphabetic characters, such as spaces and symbols", () => {
        const actual = caesar('sample text!!', 12);
        const expected = "emybxq fqjf!!";
        expect(actual).to.equal(expected);
    });
    it("encode = false: should maintain all non-alphabetic characters, such as spaces and symbols", () => {
        const actual = caesar('emybxq fqjf!!', 12, false);
        const expected = "sample text!!";
        expect(actual).to.equal(expected);
    });
})
