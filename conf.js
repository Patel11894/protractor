exports.config = {
 
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
  params: require('/home/patelpalak/pro/testData.json'),
  capabilities: {
    'browserName': 'firefox',
    
     plugins: [{
        package: 'jasmine2-protractor-utils',
        disableHTMLReport: false,
        disableScreenshot: false,
        screenshotPath:'/home/patelpalak/pro/screenshot/',
        screenshotOnExpectFailure:true,
        screenshotOnSpecFailure:true,
        clearFoldersBeforeTest: true,
        htmlReportDir: '/home/patelpalak/pro/Reports/',
        // failTestOnErrorLog: {
        //             failTestOnErrorLogLevel: 900,
        //             excludeKeywords: ['keyword1', 'keyword2']
        //         }
      }]
 
  }

}
