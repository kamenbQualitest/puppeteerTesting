const puppeteer = require('puppeteer');

describe('My First Puppeteer Test', () => {
    it('should launch the browser', async function() {
        const browser = await puppeteer.launch({headless: false, slowMo: 100, devtools: false})
        const page = await browser.newPage()
        await page.goto('http://example.com/')
        await page.waitForSelector('h1')
        await page.goto('https://dev.to/')
        await page.waitForSelector('#page-content')
        await page.goBack()
        await page.waitForSelector('h1')
        await page.goForward()
        await page.waitForSelector('#page-content')
        await browser.close()
    })
})
// describe('Interacting with Inputs', () => {
//     it('should interact with user inputs', async function() {
//         const browser = await puppeteer.launch({headless: false, slowMo: 100, devtools: false})
//         await page.goto('https://devexpress.github.io.testcafe/example/')
//         await page.type('#developer-name')
//     })
// })