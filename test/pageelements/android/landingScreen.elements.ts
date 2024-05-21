class LandingScreenElement {
  get title() {
    return $(
      '//android.view.ViewGroup[@resource-id="com.saucelabs.mydemoapp.android:id/header"]',
    );
  }
  get backaPackProduct() {
    return $('//android.widget.ImageView[@content-desc="Sauce Labs Backpack"]');
  }
  get sauceBackPack() {
    return $(
      // '//android.widget.ImageView[@content-desc="Sauce Labs Backpack"]'
      '//android.widget.ImageView[@content-desc="Displays selected product"]',
    );
  }
  get productScreenTitle() {
    return $(
      '//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/productTV"]',
    );
  }
  get addToCartButton() {
    return $(
      '//android.widget.Button[@content-desc="Tap to add product to cart"]',
    );
  }
  get cartTabButton() {
    return $(
      '//android.widget.ImageView[@content-desc="Displays number of items in your cart"]',
    );
  }
  get proceedToCheckoutButton() {
    return $(
      '//android.widget.Button[@content-desc="Confirms products for checkout"]',
    );
  }
  get myCartScreenTitle() {
    return $(
      '//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/productTV"]',
    );
  }
  get loginButton() {
    return $(
      '//android.widget.Button[@content-desc="Tap to login with given credentials"]',
    );
  }
}

export default new LandingScreenElement();
