import landingScreenElements from '../../pageelements/android/landingScreen.elements.ts';
class LandingScreenPage {
  public async verifyLandingScreen() {
    // console.log("verifyLandingScreen", landingScreenElements);
    expect(await landingScreenElements.title).toBeDisplayed();
  }
  public async selectBackPackProduct() {
    expect(await landingScreenElements.backaPackProduct).toBeDisplayed();
    await (await landingScreenElements.backaPackProduct).click();
  }
  public async verifyProductScreenTitle() {
    expect(await landingScreenElements.productScreenTitle).toBeDisplayed();
  }
  public async verifySauceBackPack() {
    expect(await landingScreenElements.sauceBackPack).toBeDisplayed();
  }

  public async selectAddToCartButton() {
    try {
      const windowSize = await driver.getWindowSize();
      const startX = windowSize.width / 2;
      const startY = windowSize.height * 0.8; // Start from 80% down the screen
      const endY = windowSize.height * 0.2; // Swipe to 20% down the screen
      console.log('windowSize', windowSize, startX, startY, endY);
      await driver.touchAction([
        { action: 'press', x: startX, y: startY },
        { action: 'moveTo', x: startX, y: endY },
        'release',
      ]);

      console.log('Swipe up action performed successfully');
    } catch (error) {
      console.error('Failed to perform swipe up action:', error);
    } finally {
      await driver.pause(1000);
      // Quit the driver
    }
    expect(await landingScreenElements.addToCartButton).toBeDisplayed();
    await (await landingScreenElements.addToCartButton).click();
  }

  public async selectCartTabButton() {
    expect(await landingScreenElements.cartTabButton).toBeDisplayed();
    await (await landingScreenElements.cartTabButton).click();
  }
  public async verifyMyCartScreenTitle() {
    expect(await landingScreenElements.myCartScreenTitle).toBeDisplayed();
  }
  public async selectProceedToCheckoutButton() {
    expect(await landingScreenElements.proceedToCheckoutButton).toBeDisplayed();
    await (await landingScreenElements.proceedToCheckoutButton).click();
  }
  public async verifyloginButton() {
    expect(await landingScreenElements.loginButton).toBeDisplayed();
  }
}
export default new LandingScreenPage();
