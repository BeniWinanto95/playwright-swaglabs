import { test, expect } from '@playwright/test';

//test.use({ storageState: 'auth.json'});

test('checkout', async ({ page }) => {
  await page.goto("https://www.saucedemo.com/inventory.html");

  const addToCart = page.locator("#add-to-cart-sauce-labs-backpack");
  await addToCart.click();

  const cliclkButtonCart = page.locator("#shopping_cart_container > a");
  await cliclkButtonCart.click();

  const clickButtonCheckout = page.locator("#checkout");
  await clickButtonCheckout.click();

  const inputInformationFirstName = page.locator("#first-name");
  await inputInformationFirstName.fill('Beni');
  await expect(inputInformationFirstName).toHaveValue('Beni');

  const inputInformationLastName = page.locator("#last-name");
  await inputInformationLastName.fill('QA');
  await expect(inputInformationLastName).toHaveValue('QA');

  const inputInformationZipCode = page.locator("#postal-code");
  await inputInformationZipCode.fill('16544');
  await expect(inputInformationZipCode).toHaveValue('16544');

  const clickButtonContinue = page.locator("#continue");
  await clickButtonContinue.click();

  const clickButtonFinish = page.locator("#finish");
  await clickButtonFinish.click();

  const clickButtonBackHome = page.locator("#back-to-products");
  await clickButtonBackHome.click();
});