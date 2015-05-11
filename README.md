# node-selenium-client

Docker client to run selenium JS scripts against a running selenium/standalone-chrome:2.45.0 container using [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver)

## To run..

### 1. First start an instance of standalone-chrome or a chrome node with a hub   

`docker run -d -P --name selenium-hub selenium/hub:2.45.0`   

or   

```
docker run -d -P --name chrome selenium/hub:2.45.0
docker run  --privileged -d -P --name chrome --link selenium-hub:hub selenium/node-chrome-debug:2.45.0`
```

If you use this debug image you can connect to the browser using vnc, on a Mac you can do this by entering `vnc://[cid for node-chrome-debug container]:5900`   

`echo $(docker inspect chrome | grep -i ipaddress)`   

### 2. Next build and run the client which links to the standalone-chrome container above and connects to the running selenium server.   

`docker build --rm -t rawlingsj/node-selenium-client .`    
`docker run -ti --rm --link selenium-hub:hub rawlingsj/node-selenium-client`

