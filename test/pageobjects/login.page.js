const { $ } = require('@wdio/globals')
const Page = require('./page');
const AppCustom = require('../common/AppCustom.js')

class LoginPage extends Page {
    constructor(){
        super();
        this.AppCustom = new AppCustom();
    }

    tabMenu (menu) {
        return $(`//android.widget.TextView[@content-desc="${menu}"]`);
    }

    async selectMenu (menu) {
        const xpathSelectMenu = this.tabMenu(menu);
        console.log("xpath is: ", xpathSelectMenu.toString());
        await this.AppCustom.waitForElementClickableAndClick(xpathSelectMenu);
    }

    open () {
        return super.open();

    }
}

module.exports = new LoginPage();
