import { config as conf }  from './wdio.conf.shared.ts';

conf.specs = [
    '../features/android/login.feature'
];
conf.capabilities = [{
    platformName: 'Android',
    // browserName: 'Chrome',
    // "browserVersion": "113",
    "appium:deviceName": ".*",
    'appium:platformVersion': "^1[0-3].*",
    'appium:automationName': 'UiAutomator2', 
    'appium:app': 'storage:filename=mda-2.0.1-22.apk',
    "appium:orientation": "PORTRAIT",
    "appium:noReset": true,
    // 'appium:app': '../../app/mda-2.0.1-22.apk',
    "appium:autoGrantPermissions": true,
    "appium:autoDismissAlerts": true,
    "appium:locationContextEnabled": true, 
    "appium:logLevel": 'debug',
    "appium:newCommandTimeout": 24000,
    "appium:commandTimeouts": 240000, 
    "sauce:options":{
        appiumVersion : '2.0.0',
        build: 'androidtest',
        // phoneOnly:true,
        // tunnelIdentifier: ,
        // parentTunnel:,
        extendedDebugging:true,
    }
}]
export const config = conf;