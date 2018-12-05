/*const {defineSupportCode} = require('cucumber');
defineSupportCode(({Given, When, Then}) => {

    Given('I navigate to Otto.de', ()=> {

    });

    When('I click on the homepage hyperlink', ()=> {

    });

    Then('I stay in the same page', ()=> {

    });

});*/

var chai = require('chai');
var chaiAspromised = require('chai-as-promised');
chai.use(chaiAspromised);
var expect = chai.expect;
var Cucumber = require('cucumber');
var Given = Cucumber.Given;
var When = Cucumber.When;
var Then = Cucumber.Then;
//var expect = chai.expect;
var text = 'khajoor';
var helloworld_page = require('./../pages/helloworld_page.js');
var integer1, integer2, additionResult;
Given('I navigate to Otto.de', function() {
   browser.get('https://angularjs.org/');
});
  
When('I click on the homepage hyperlink', function() {
    element(by.model('yourName')).sendKeys('yo mf');
});
  
Then('I stay in the same page', function() {
    //console.log('This test fucking passes');
    var selectedElement = element(by.xpath('//input[@placeholder="Enter a name here"]/following-sibling[1]::h1'));
    //expect(element(by.xpath('//input[@placeholder="Enter a name here"]/following-sibling[1]::h1')).getText()).to.eventually.equal('khajoor');
    selectedElement.getText().then(function(){
      expect(text).to.equal(myText);
    });
    console.log(helloworld_page.justSomeFunction());
});

Given('two numbers {int} and {int}', function(int1, int2) {
  this.integer1 = int1;
  this.integer2 = int2;
});
 
When('I perform addition of the given numbers', function() {
  this.additionResult = this.integer1 + this.integer2;
});
 
Then('I should see the result as the added numbers', function() {
 expect(this.additionResult).to.equal(4);
});
 

