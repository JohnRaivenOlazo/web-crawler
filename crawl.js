const { JSDOM } = require("jsdom")

const crawlPage = async ( currentURL ) => {
    console.log("Actively crawling current: ", currentURL)

    try {
        const resp = await fetch(currentURL)
        if (resp.status > 399) {
            console.log(`Error in fetch with status code: ${resp.status} on page: ${currentURL}`)
            return
        }
        const contentType = resp.headers.get("content-type")
        if (!contentType.includes("text/html")){
            console.log(`non html response, content type: ${contentType} on page: ${currentURL}`)
            return
        }

        console.log(await resp.text())
    } catch (error) {
        console.log(`Error in fetch: ${error.message} on page: ${currentURL}`)
    }
}

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
    getURLsFromHTML,
    crawlPage
}