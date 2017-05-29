var dashboardPage = function() 
{
    this.refreshbutton = function() {
      browser.driver.findElement(by.className('head-dasbord-icon')).click();
    };
};


module.exports = new dashboardPage();