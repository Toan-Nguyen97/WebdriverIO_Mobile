

class AppCustom {

    //function wait clickable and click element
    async waitForElementClickableAndClick(xpath){
        await browser.waitUntil(async () => {
            return (await xpath.isDisplayed());
        }, { timeout: 5000, timeoutMsg: 'Element not visible after 5s' });
    
        await xpath.click();
    }

    //func wait visible and sendkey
    async waitForElementVisibleAndSendkey(xpath, inputValue){
        const element = await $(xpath); // Tạo đối tượng phần tử
    await browser.waitUntil(async () => {
        return (await element.isDisplayed());
    }, { timeout: 5000, timeoutMsg: 'Element not visible after 5s' });

    await element.setValue(inputValue);
    }
}

module.exports = AppCustom;
