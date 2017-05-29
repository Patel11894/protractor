//describe('Protractor Demo App', function() {
//  it('should add one and two', function() {
//    browser.get('http://juliemr.github.io/protractor-demo/');
//    element(by.model('first')).sendKeys(1);
//    element(by.model('second')).sendKeys(2);

 //   element(by.id('gobutton')).click();

//    expect(element(by.binding('latest')).getText()).
//        toEqual('3'); // This is wrong!
//  });
//  });
 
var logintest = require('/home/patelpalak/pro/test/Commantest /logintest.js');
//var EC = protractor.ExpectedConditions;
// Waits for the URL to contain 'dashboard'.

describe('eSync application',function(){
  it('should open homePage',function(){
   browser.driver.get(browser.params.URL);
       logintest.logintest(browser.params.userName,browser.params.password);
     //  browser.wait(EC.urlContains('dashboard'), 5000);
      // browser.wait(EC.elementToBeClickable(by.buttonText('Apply')), 5000);
     //  browser.sleep(10000);
      // expect(browser.getCurrentUrl()).toBe('https://snapstorev2-1.excelfore.com:8003/sotauiv2/#/dashboard');
       var ele = browser.driver.findElement(by.className('btn btn-default')).getText();
       expect(ele).toEqual('Apply');
       console.log('navigate to dashboard page');
    });

var dashboardtest = require('/home/patelpalak/pro/test/Dashboard/refreshDashboard.js');

  it('dashboard refresh',function() {
         dashboardtest.clickOnRefreshbutton();
         console.log('click on dashboard refresh button');
  });  
  
 });


