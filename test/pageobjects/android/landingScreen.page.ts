import landingScreenElements from "../../pageelements/android/landingScreen.elements.ts";
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
export default new LandingScreenPage()