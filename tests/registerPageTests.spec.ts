import { test, expect } from "@playwright/test";
import { RedmineLoginPage } from "./../pages/redmineLoginPage.page";
import { RedmineRegisterPage } from "./../pages/redmineRegisterPage.page";
import { RedmineHomePage } from "../pages/redmineHomePage.page";

test.describe("Register page tests", () => {
  test.beforeEach(async ({ page }) => {
    let redmineHomePage = new RedmineHomePage(page);
    await redmineHomePage.goto();
    await page.waitForLoadState();
    await redmineHomePage.checkPageUrl();
  });

  test("Should register new account", async ({ page }) => {
    let redmineHomePage = new RedmineHomePage(page);
    let redmineLoginPage = new RedmineLoginPage(page);
    let redmineRegisterPage = new RedmineRegisterPage(page);
    await redmineHomePage.registerBtn.click();
    await redmineRegisterPage.fillInputs(
      redmineRegisterPage.generateRandomLogin(),
      "qwerty",
      "Dima",
      "Smaha",
      redmineRegisterPage.generateRandomLogin() + "@gmail.com"
    );
    await redmineRegisterPage.clickSubmitBtn();
    await redmineLoginPage.checkPageUrl();
  });
});
