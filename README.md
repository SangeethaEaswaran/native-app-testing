# Description: 
This framework aims to test functionality sauce lab demo native app (iOS/ Android) using webdriverio , appium javascript and cucumber BDD and sauce labs 

# Pre-requisites:
Download and install  
- node.js  v19.9.0  https://nodejs.org/en/download/
- npm version- v9.6.3( will be installed along with node)
- IDE of choice (VScode- https://code.visualstudio.com/download) 
- sauce lab sign in (SAUCE_USERNAME , SAUCE_ACCESS_KEY ) . Note - Saucelabs provides 60 mins of free automated test runs

# Usage:
From the command line terminal 
- git clone https://github.com/SangeethaEaswaran/native-app-testing
- cd native-app-testing
- npm install 
- update the SAUCE_USERNAME , SAUCE_ACCESS_KEY in local.env file 
- upload the .ipa and .apk files from /app folder to sauce lab app management as shown in the below screenshot 
- run tests using below CLI commands 
    - npm run iosTest 
    - npm run androidTest

# Reporting used :
Test results are viewed on terminal
1. Spec reporter : 
![alt text](image-4.png)

# Sauce labs 
App management ![alt text](image.png)
Appium inspector ![alt text](image-1.png)
capabilities - https://docs.saucelabs.com/dev/test-configuration-options/#mobile-appium-capabilities
Saucelabs Test results - ![alt text](image-3.png)
Example Sauce lab mobile run videos can be seen in /sample-video-sauce folder 

# packages used
@wdio/mocha-framework - A WebdriverIO plugin. Adapter for Mocha testing framework.
cucumber- A tool for running automated tests written in plain language
appium-uiautomator2-driver-  test automation framework for Android devices(emulators, real device)  automates native, hybrid and mobile web apps
@types/node - This package contains type definitions for node 
@wdio/allure-reporter
@wdio/appium-service
@wdio/cli
@wdio/cucumber-framework
@wdio/local-runner
@wdio/sauce-service
@wdio/spec-reporter
appium
ts-node
typescript
wdio-video-reporter
allure-commandline

