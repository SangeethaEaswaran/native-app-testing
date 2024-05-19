import { config as conf }  from './wdio.conf.shared.ts';
conf.specs = [
    '../features/ios/login.feature'
];
conf.capabilities = [{
    platformName: "iOS",
    browserName: 'Safari',
    "appium:deviceName": ".*",
    'appium:platformVersion': "^1[3-6].*",
    'appium:automationName': 'XCUITest', 
    // 'appium:app': 'storage:filename=ApiDemos-debug.apk',
    "appium:autoGrantPermissions": true,
    "appium:autoAcceptAlerts": true, 
    "appium:autoWebview": true,
    "appium:locationContextEnabled": true, 
    "appium:noReset": true,
    "appium:logLevel": 'debug',
    "appium:newCommandTimeout": 24000,
    "appium:commandTimeouts": 240000, 
    "sauce:options":{
        appiumVersion : '2.0.0',
        build: 'iostest',
        // phoneOnly:true,
        // tunnelIdentifier: ,
        // parentTunnel:,
        extendedDebugging:true,
    }
}];
export const config = conf;