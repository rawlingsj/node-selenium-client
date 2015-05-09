FROM fedora:21
MAINTAINER fabric8.io (http://fabric8.io/)

RUN yum install -y nodejs npm && \
	useradd fabric8 && \
	npm install selenium-webdriver

USER fabric8

ADD client-script.js /home/fabric8/

CMD node ~/client-script.js