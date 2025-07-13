# Web Crawler HTTP Project

> "Just a simple tool that finds links so you don't have to." 

## What's This?

This web crawler scans websites and maps out all their links. It sticks to the domain you give it (because jumping between sites would be rude). I made this to learn about web scraping and to save myself some time when exploring site structures.

## Tech I Used 💻

- **Node.js** - For handling asynchronous operations and running the crawler
- **JSDOM** - Parses HTML without needing a browser
- **Jest** - Makes sure my code actually works before I break the internet
- **URL API** - Way better than trying to write regex for URLs (trust me, I tried)

## How To Use It

```bash
# Get the code
git clone https://github.com/JohnRaivenOlazo/web-crawler.git

# Install what it needs
npm install

# Run it on any website
npm start https://example.com
```

## What It Does 👨‍💻

1. Visits the website you specify
2. Finds all links that stay on the same domain
3. Keeps track of how many times each link appears
4. Shows you a list sorted by popularity
5. Saves you hours of manual clicking and tracking

## Testing It �

```bash
npm test
```

The tests check things like making sure URLs like `https://raiven.com/path/` and `https://raiven.com/path` are treated the same (because trailing slashes are annoying).

## How It Works

```
1. Clean up URLs so they're consistent
2. Visit pages and collect their links
3. Sort everything and show results
```