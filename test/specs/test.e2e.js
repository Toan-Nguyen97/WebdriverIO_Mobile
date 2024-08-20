const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        LoginPage.open()
        await LoginPage.selectMenu('App')
        await browser.pause(15000);

    })
})

