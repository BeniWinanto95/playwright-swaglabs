import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  const inputUsername = page.locator('#user-name');
  await inputUsername.fill('standard_user');
  await expect(inputUsername).toHaveValue('standard_user');

  const inputPassword = page.locator('#password');
  await inputPassword.fill('secret_sauce');
  await expect(inputPassword).toHaveValue('secret_sauce');

  const buttonLogin = page.locator('#login-button');
  await buttonLogin.click();

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