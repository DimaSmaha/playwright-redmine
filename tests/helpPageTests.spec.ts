import { test, expect } from "@playwright/test";
import { RedmineHomePage } from "../pages/redmineHomePage.page";
import { RedmineHelpPage } from "../pages/redmineHelpPage.page";

test.describe("Login page tests", () => {
  test.beforeEach(async ({ page }) => {
    let redmineHomePage = new RedmineHomePage(page);
    await redmineHomePage.goto();
    await page.waitForLoadState();
    await redmineHomePage.checkPageUrl();
  });

  test("Should sing in to created account", async ({ page }) => {
    let redmineHomePage = new RedmineHomePage(page);
    let redmineHelpPage = new RedmineHelpPage(page);

    await redmineHomePage.clickHelpBtn();
    await redmineHelpPage.checkPageUrl();
    await redmineHelpPage.clickGoToTranslationsBtn();
    await expect(redmineHelpPage.frenchLang).toBeVisible();
    await redmineHelpPage.clickFrenchLanguageBtn();
    await expect(redmineHelpPage.page).toHaveURL(
      "projects/redmine/wiki/FrGuide"
    );
    await expect(page.locator("text=Guide d'installation¶")).toBeVisible();
  });
});
