var homepage = require('/home/patelpalak/pro/pages/homePage.js');

var login = function()
{
    
     this.logintest = function(userName,password) {
     homepage.enterEmail(userName);
     console.log('enter the E-mail');
     homepage.enterPassword(password);
   
     console.log('enter the Pwd');
     homepage.clickOnLogin();
     console.log('click on login button');
    
   };
};

module.exports = new login();


