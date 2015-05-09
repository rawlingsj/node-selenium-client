var host = process.env.CHROME_PORT_4444_TCP_ADDR || '127.0.0.1';
var port = process.env.CHROME_PORT_4444_TCP_PORT || '4444';

var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until;

var driver = new webdriver.Builder()
                .forBrowser('chrome')
                .usingServer('http://' + host + ':' + port + '/wd/hub')
                .build();

driver.get('http://www.google.com');
driver.findElement(webdriver.By.name('q')).sendKeys('webdriver');
driver.findElement(webdriver.By.name('btnG')).click();
driver.wait(until.titleIs('webdriver - Google Search'), 1000);
driver.quit();