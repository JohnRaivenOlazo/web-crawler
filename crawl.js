const normalizeURL = (urlString) => {
    const url = new URL(urlString)
    const fullURL = `${url.hostname}${url.pathname}`;
    return fullURL && url.pathname.slice(-1) === "/" ? fullURL.slice(0, -1) : fullURL;
}

module.exports  =  {
    normalizeURL
}