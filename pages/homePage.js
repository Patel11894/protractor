var home_page = function() {
   
    this.enterEmail = function(userName){
       browser.driver.findElement(by.id('user_email')).sendKeys(userName);
    };

    this.enterPassword = function(password) {
       browser.driver.findElement(by.id('user_password')).sendKeys(password);
    };

    this.clickOnLogin = function(){
       browser.driver.findElement(by.id('submit')).click();
    };
};


module.exports = new home_page();