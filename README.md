# node-selenium-client

Docker client to run selenium JS scripts against a running selenium/standalone-chrome:2.45.0 container using [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver)

## To run..

First start an instance of standalone-chrome

`docker run -d -P --name chrome selenium/standalone-chrome:2.45.0`

Next build and run the client which links to the standalone-chrome container above and connects to the running selenium server.

`docker build --rm -t test/node-selenium-client .`    
`docker run -ti --rm --link chrome:chrome  test/node-selenium-client`

### NOTE: currently not working, receive error..

`UnknownError: unknown error: Chrome failed to start: crashed`

...

```
UnknownError: unknown error: Chrome failed to start: crashed
  (Driver info: chromedriver=2.14.313457 (3d645c400edf2e2c500566c9aa096063e707c9cf),platform=Linux 3.17.4-301.fc21.x86_64 x86_64) (WARNING: The server did not provide any stacktrace information)
Command duration or timeout: 66.09 seconds
Build info: version: '2.45.0', revision: '5017cb8', time: '2015-02-26 23:59:50'
System info: host: '96d93a4a0b50', ip: '172.17.0.59', os.name: 'Linux', os.arch: 'amd64', os.version: '3.17.4-301.fc21.x86_64', java.version: '1.7.0_75'
Driver info: org.openqa.selenium.chrome.ChromeDriver
    at new bot.Error (/node_modules/selenium-webdriver/lib/atoms/error.js:113:18)
    at Object.bot.response.checkResponse (/node_modules/selenium-webdriver/lib/atoms/response.js:106:9)
    at /node_modules/selenium-webdriver/lib/webdriver/webdriver.js:158:24
    at promise.ControlFlow.runInFrame_ (/node_modules/selenium-webdriver/lib/webdriver/promise.js:1877:20)
    at promise.Callback_.goog.defineClass.notify (/node_modules/selenium-webdriver/lib/webdriver/promise.js:2464:25)
    at promise.Promise.notify_ (/node_modules/selenium-webdriver/lib/webdriver/promise.js:563:12)
    at Array.forEach (native)
    at Object.goog.array.forEach (/node_modules/selenium-webdriver/lib/goog/array/array.js:203:43)
    at promise.Promise.notifyAll_ (/node_modules/selenium-webdriver/lib/webdriver/promise.js:552:16)
    at goog.async.run.processWorkQueue [as _onTimeout] (/node_modules/selenium-webdriver/lib/goog/async/run.js:125:21)
From: Task: WebDriver.createSession()
    at Function.webdriver.WebDriver.acquireSession_ (/node_modules/selenium-webdriver/lib/webdriver/webdriver.js:155:22)
    at Function.webdriver.WebDriver.createSession (/node_modules/selenium-webdriver/lib/webdriver/webdriver.js:129:30)
    at Builder.build (/node_modules/selenium-webdriver/builder.js:416:22)
    at Object.<anonymous> (/home/fabric8/test-script.js:11:18)
    at Module._compile (module.js:456:26)
    at Object.Module._extensions..js (module.js:474:10)
    at Module.load (module.js:356:32)
    at Function.Module._load (module.js:312:12)
    at Function.Module.runMain (module.js:497:10)
    at startup (node.js:119:16)
From: Task: WebDriver.navigate().to(http://www.google.com)
    at webdriver.WebDriver.schedule (/node_modules/selenium-webdriver/lib/webdriver/webdriver.js:360:15)
    at webdriver.WebDriver.Navigation.to (/node_modules/selenium-webdriver/lib/webdriver/webdriver.js:1097:23)
    at webdriver.WebDriver.get (/node_modules/selenium-webdriver/lib/webdriver/webdriver.js:791:26)
    at Object.<anonymous> (/home/fabric8/test-script.js:13:8)
    at Module._compile (module.js:456:26)
    at Object.Module._extensions..js (module.js:474:10)
    at Module.load (module.js:356:32)
    at Function.Module._load (module.js:312:12)
    at Function.Module.runMain (module.js:497:10)
    at startup (node.js:119:16)
```