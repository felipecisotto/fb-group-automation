const browserService = require('../services/BrowserService');
const loginService  = require('../services/LoginService');

const postMessage = async (email, message, groups) => {

    if (!await loginService.isLogged(email)) {
        throw new Error('User not logged');
    }
    const browser = await browserService.getBrowser()
    const page = await browserService.getPage(browser);
    await browserService.setUserCookie(email, page);
    await page.goto('https://mbasic.facebook.com/')
    console.log('FaceBook started');
    for (group of groups) {
        await page.goto('https://mbasic.facebook.com/groups/' + group);
        await page.type('textarea[name=xc_message]', message);
        await page.click("input[name=view_post]");
    }

    await browser.close();

};
module.exports = {
    postMessage
};
