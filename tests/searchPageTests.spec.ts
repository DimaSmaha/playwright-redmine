import { test, expect } from "@playwright/test";
import { RedmineHomePage } from "../pages/redmineHomePage.page";
import { RedmineSearchPage } from "./../pages/redmineSearchPage.page";

test.describe("Search page tests", () => {
  test.beforeEach(async ({ page }) => {
    let redmineHomePage = new RedmineHomePage(page);
    await redmineHomePage.goto();
    await page.waitForLoadState();
    await redmineHomePage.checkPageUrl();
  });

  test("Should test search", async ({ page }) => {
    let redmineHomePage = new RedmineHomePage(page);
    let redmineSearchPage = new RedmineSearchPage(page);

    await redmineHomePage.fillSearchInput("issues");
    await page.keyboard.press("Enter");
    await redmineSearchPage.selectScope("all");
    await redmineSearchPage.checkTitleChb();
    await redmineSearchPage.sendBtn.click();
    await expect(redmineSearchPage.titleChb).toBeChecked();
  });
});
