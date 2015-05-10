var host = process.env.CHROME_PORT_4444_TCP_ADDR || '127.0.0.1';
var port = process.env.CHROME_PORT_4444_TCP_PORT || '4444';

var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until;

var chromeCapabilities = webdriver.Capabilities.chrome();
var chromeOptions = {
    'args': ['--no-sandbox']
};

chromeCapabilities.set('chromeOptions', chromeOptions);

var driver = new webdriver.Builder()
                .forBrowser('chrome')
                .withCapabilities(chromeCapabilities)
                .usingServer('http://' + host + ':' + port + '/wd/hub')
                .build();

driver.get('http://www.google.com');

driver.getTitle().then(function (title) {
    console.log(title);
});

driver.quit();