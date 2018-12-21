exports.config = {

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./features/*.feature'],
    capabilities: {
        browserName:'chrome'
    },
    cucumberOpts: {
        require: ['./features/step_definitions/*.js'],
        format: 'json:.tmp/results.json'
    },
    /*onPrepare: function(){
        var chai = require(chai);
        var chaiAsExpected = require(chai-as-expected);
        chai.use(chaiAsExpected);
        var expectChai = chai.expect;
        global.expect = expectChai;
        baba  test
    }, */
    onPrepare: function(){
        browser.driver.manage().window().maximize();
    },
    // Here the magic happens adding this comment here
    plugins: [{
        package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
        options:{
            automaticallyGenerateReport: true,
            removeExistingJsonReportFile: true
        }
    }]
}
