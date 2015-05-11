var host = process.env.HUB_PORT_4444_TCP_ADDR || '127.0.0.1';
var port = process.env.HUB_PORT_4444_TCP_PORT || '4444';

var webdriver = require('selenium-webdriver'),
		chrome = require('selenium-webdriver/chrome'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until;

var options = new chrome.Options().
          addArguments('no-sandbox');

var driver = new webdriver.Builder()
                .forBrowser('chrome')
                .setChromeOptions(options)
                .usingServer('http://' + host + ':' + port + '/wd/hub')
                .build();

driver.get('http://www.google.com');

driver.getTitle().then(function (title) {
    console.log(title);
});

driver.quit();