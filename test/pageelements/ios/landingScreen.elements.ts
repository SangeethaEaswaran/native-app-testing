class LandingScreenElement {
  get appTitle() {
    return $('//XCUIElementTypeImage[@name="AppTitle Icons"]');
  }
  get backaPackProduct() {
    return $('//XCUIElementTypeImage[@name="BagBlack Image"]');
  }
  get productScreenTitle() {
    return $(
      '//XCUIElementTypeOther[@name="ProductDetails-screen"]/XCUIElementTypeOther[1]'
    );
  }
  get sauceBackPack() {
    return $('//XCUIElementTypeStaticText[@name="Sauce Labs Backpack"]');
  }
  get addToCartButton() {
    return $('//XCUIElementTypeButton[@name="AddToCart"]');
  }
  get cartTabButton() {
    return $('//XCUIElementTypeButton[@name="Cart-tab-item"]');
  }
  get myCartScreenTitle() {
    return $('//XCUIElementTypeStaticText[@name="My Cart"]');
  }
  get proceedToCheckoutButton() {
    return $('//XCUIElementTypeButton[@name="ProceedToCheckout"]');
  }
  get loginButton() {
    return $('//XCUIElementTypeButton[@name="Login"]');
  }
}
export default new LandingScreenElement();
