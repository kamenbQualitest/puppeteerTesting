const puppeteer = require('puppeteer');
//Cody, the commented out bit is the problem area. I will be pushing somehwat regularly as I go through the course i am following so this should be the reference point.
// describe('My First Puppeteer Test', () => {
//     it('should launch the browser', async function() {
//         const browser = await puppeteer.launch({headless: false, slowMo: 100, devtools: false})
//         const page = await browser.newPage()
//         await page.goto('http://example.com/')
//         await page.waitForSelector('h1')
//         await page.goto('https://dev.to/')
//         await page.waitForSelector('#page-content')
//         await page.goBack()
//         await page.waitForSelector('h1')
//         await page.goForward()
//         await page.waitForSelector('#page-content')
//         await browser.close()
//     })
// })
describe('Interacting with Inputs', () => {
    it('should interact with user inputs', async function() {
        const browser = await puppeteer.launch({headless: true, slowMo: 100, devtools: false})
        const page = await browser.newPage()
        await page.goto('https://devexpress.github.io/testcafe/example/')
        await page.type('#developer-name', 'Mike Wizowski', {delay: 0})
        await page.waitForTimeout(5000)
        await browser.close()

    
    })
})
describe('Interacting with buttons', () => {
    it('should be able to click buttons', async function() {
        const browser = await puppeteer.launch({headless: false})
        const page = await browser.newPage()
        await page.goto('https://devexpress.github.io/testcafe/example/')
        await page.type('#developer-name', 'steve', {delay: 0})
        await page.click('#tried-test-cafe', {clickCount: 1})
        await page.waitForTimeout(5000)
        await browser.close()
    })
})