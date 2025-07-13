const { normalizeURL } = require("./crawl.js");
const { test, expect } = require("@jest/globals");

test("normalize URL strip protocol", () => {
    const input =  "https://raiven.com/path"
    const actual = normalizeURL(input)
    const expected = "raiven.com/path"
    expect(actual).toEqual(expected);
})

test("normalize URL trailing slash", () => {
    const input =  "https://raiven.com/path/"
    const actual = normalizeURL(input)
    const expected = "raiven.com/path"
    expect(actual).toEqual(expected);
})

test("normalize URL strip http", () => {
    const input =  "http://Raiven.com/path/"
    const actual = normalizeURL(input)
    const expected = "raiven.com/path"
    expect(actual).toEqual(expected);
})