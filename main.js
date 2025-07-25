const { crawlPage } = require("./crawl.js") 
const { printOutput } = require("./report.js")

const main = async () => {
    if( process.argv.length < 3){
        console.log("no website provided")
        process.exit(1)
    }
    if (process.argv.length > 3){
        console.log("too many command line args")
        process.exit(1)
    }
    
    const baseURL = process.argv[2]
    console.log("starting crawling of", baseURL)
    const pages = await crawlPage(baseURL, baseURL, {})
    printOutput(pages)
}

main()