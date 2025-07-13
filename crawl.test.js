const { normalizeURL, getURLsFromHTML } = require("./crawl.js");
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

test("normalize URL capitals", () => {
    const input =  "https://RAIVEN.raiven.com/path/"
    const actual = normalizeURL(input)
    const expected = "raiven.raiven.com/path"
    expect(actual).toEqual(expected);
})



test("normalize URL strip http", () => {
    const input =  "http://Raiven.com/path/"
    const actual = normalizeURL(input)
    const expected = "raiven.com/path"
    expect(actual).toEqual(expected);
})

test("getURLsFromHTML absolute", () => {
    const inputHTMLBody = `
    <html>
    <body>
    <a href="https://raiven.com/path/">
        Raiven Site
    </a>
    </body>
    </html>
    `
    const inputBaseURL = "https://raiven.com"
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL)
    const expected = ["https://raiven.com/path/"]
    expect(actual).toEqual(expected);
})

test("getURLsFromHTML relative", () => {
    const inputHTMLBody = `
    <html>
    <body>
    <a href="/path/">
        Raiven Site
    </a>
    </body>
    </html>
    `
    const inputBaseURL = "https://raiven.com"
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL)
    const expected = ["https://raiven.com/path/"]
    expect(actual).toEqual(expected);
})

test("getURLsFromHTML both", () => {
    const inputHTMLBody = `
    <html>
    <body>
    <a href="https://raiven.com/path1/">
        Raiven Site 1
    </a>
    <a href="/path2/">
        Raiven Site 2
    </a>
    </body>
    </html>
    `
    const inputBaseURL = "https://raiven.com"
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL)
    const expected = ["https://raiven.com/path1/", "https://raiven.com/path2/"]
    expect(actual).toEqual(expected);
})


test("getURLsFromHTML invalid", () => {
    const inputHTMLBody = `
    <html>
    <body>
    <a href="invalid">
        Invalid URL
    </a>
    </body>
    </html>
    `
    const inputBaseURL = "https://raiven.com"
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL)
    const expected = []
    expect(actual).toEqual(expected);
})
