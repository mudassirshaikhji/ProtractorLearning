exports.config = {

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./features/*.feature'],
    capabilities: {
        browserName:'chrome'
    },
    cucumberOpts: {
        require: ['./features/step_definitions/*.js']
    },
    /*onPrepare: function(){
        var chai = require(chai);
        var chaiAsExpected = require(chai-as-expected);
        chai.use(chaiAsExpected);
        var expectChai = chai.expect;
        global.expect = expectChai;
        //adding a new comment
    }, */
    onPrepare: function(){
        browser.driver.manage().window().maximize();
    }
}