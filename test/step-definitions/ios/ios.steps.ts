import { Given, When, Then } from '@wdio/cucumber-framework';
import LandingScreenIosPage from '../../pageobjects/ios/landingScreen.page.js';

Given('I am on the native ios app', async () => {
  console.log('platform ios');
  await LandingScreenIosPage.verifyLandingScreen();
});
When('I add product to my cart', async () => {
  await LandingScreenIosPage.selectBackPackProduct();
  await LandingScreenIosPage.verifyProductScreenTitle();
  await LandingScreenIosPage.verifySauceBackPack();
  await LandingScreenIosPage.selectAddToCartButton();
  await LandingScreenIosPage.selectCartTabButton();
  await LandingScreenIosPage.verifyMyCartScreenTitle();
});

When('I procced to checkout', async () => {
  await LandingScreenIosPage.selectProceedToCheckoutButton();
});

Then('I should see login screen', async () => {
  await LandingScreenIosPage.verifyloginButton();
});
