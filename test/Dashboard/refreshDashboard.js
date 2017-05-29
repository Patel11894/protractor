var dashboardPage = require('/home/patelpalak/pro/pages/dashboardPage.js');

var dashboardrefreshtest = function(){
 
   this.clickOnRefreshbutton = function() {
     dashboardPage.refreshbutton();
};
};

module.exports = new dashboardrefreshtest();