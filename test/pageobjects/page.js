const { browser } = require('@wdio/globals')

module.exports = class Page {

    open () {
        beforeEach(async () => {
            // Khởi động hoặc chuẩn bị môi trường trước mỗi test case
            await browser.launchApp(); // Sử dụng await trong hàm async
        });
    }
    
}
