const browserService = require('./BrowserService');
const fs = require('fs');

async function logIn(email, password, mfa) {
    const browser = await browserService.getBrowser();
    const page = browserService.getPage(browser);
    await page.goto('https://mbasic.facebook.com/')
    await page.type('#m_login_email', email);
    await page.type('input[name="pass"]', password);
    await page.click("input[name=login]");
    await page.type('#approvals_code', mfa);
    await page.click("input[type=submit]");
    await page.waitForNavigation();
    await page.click("input[type=submit]");
    await page.waitForNavigation();
    const cookies = await page.cookies();

    await fs.writeFileSync(email, JSON.stringify(cookies));

    await browser.close();
}

async function isLogged(email) {
    return fs.existsSync(email)
}

module.exports = {
    logIn,
    isLogged
}
