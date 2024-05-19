import { config as conf }  from './wdio.conf.shared.ts';
conf.specs = [
    '../features/ios/login.feature'
];
conf.capabilities = [{
    platformName: 'Android',
    browserName: 'Chrome',
    "appium:deviceName": ".*",
    'appium:platformVersion': "^1[0-3].*",
    'appium:automationName': 'UiAutomator2', 
    // 'appium:app': 'storage:filename=ApiDemos-debug.apk',
    "appium:autoGrantPermissions": true,
    "appium:locationContextEnabled": true, 
    "appium:logLevel": 'debug',
    "appium:newCommandTimeout": 24000,
    "appium:commandTimeouts": 240000, 
    "sauce:options":{
        appiumVersion : '2.0.0',
        build: 'androidtest',
        phoneOnly:true,
        // tunnelIdentifier: ,
        // parentTunnel:,
        extendedDebugging:true,
    }
}]
export const config = conf;