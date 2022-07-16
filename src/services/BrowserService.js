const puppeteer = require('puppeteer');
const fs = require('fs');

const getBrowser = async () => {
    return await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ['--start-maximized']
    });
};
const getPage = async (browser) => {
    return await browser.newPage();
};
const setUserCookie = async (email,page) => {
    const cookiesData = fs.readFileSync(email, 'utf8');
    await page.setCookie(...JSON.parse(cookiesData));
}
module.exports = {
    getBrowser,
    getPage,
    setUserCookie
}
