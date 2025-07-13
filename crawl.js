const { JSDOM } = require("jsdom")

const getURLsFromHTML = ( htmlBody, baseURL )  => {
    const urls = []
    const dom = new JSDOM(htmlBody)
    const linkElements = dom.window.document.querySelectorAll("a")
    for (const link of linkElements){
        if(link.href.slice(0, 1) === "/"){
            //relative
            try{ 
                const url = new URL(`${baseURL}${link.href}`);
                urls.push(url.href)
            } catch (error) {
                console.log("Invalid URL relative: ", error.mesage)
            }
        }else {
            //absolute
            try{ 
                const url = new URL(link);
                urls.push(url.href)
            } catch (error) {
                console.log("Invalid URL absolute: ", error.message)
            }
        }
    } 
    return urls
}

const normalizeURL = (urlString) => {
    const url = new URL(urlString)
    const fullURL = `${url.hostname}${url.pathname}`;
    return fullURL && url.pathname.slice(-1) === "/" ? fullURL.slice(0, -1) : fullURL;
}

module.exports  =  {
    normalizeURL,
    getURLsFromHTML
}