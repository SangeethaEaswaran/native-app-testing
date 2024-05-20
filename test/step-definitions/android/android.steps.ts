import { Given, When, Then } from '@wdio/cucumber-framework';
import LandingScreenAndroidPage from '../../pageobjects/android/landingScreen.page.ts'
Given('I am on the native android app', async() => {
console.log('platform android');
    LandingScreenAndroidPage.verifyLandingScreen();
});
When('I add backpack product to my cart', async()=>{
    await LandingScreenAndroidPage.selectBackPackProduct();
    await LandingScreenAndroidPage.verifyProductScreenTitle();
    await LandingScreenAndroidPage.verifySauceBackPack();
    await LandingScreenAndroidPage.selectAddToCartButton();
    await LandingScreenAndroidPage.selectCartTabButton();
    await LandingScreenAndroidPage.verifyMyCartScreenTitle();
});

When('I procced to checkout product', async()=>{
    await LandingScreenAndroidPage.selectProceedToCheckoutButton()
});

Then('I should see the login screen', async()=>{
    await LandingScreenAndroidPage.verifyloginButton();
});
