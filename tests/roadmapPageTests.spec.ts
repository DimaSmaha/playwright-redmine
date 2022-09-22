import { test, expect } from "@playwright/test";
import { RedmineRoadmapPage } from "./../pages/redmineRoadmapPage.page";
import { RedmineHomePage } from "../pages/redmineHomePage.page";

test.describe("Roadmap page tests", () => {
  test.beforeEach(async ({ page }) => {
    let redmineHomePage = new RedmineHomePage(page);
    await redmineHomePage.goto();
    await page.waitForLoadState();
    await redmineHomePage.checkPageUrl();
  });

  test("Should show future version", async ({ page }) => {
    let redmineHomePage = new RedmineHomePage(page);
    let redmineRoadmapPage = new RedmineRoadmapPage(page);

    await redmineHomePage.clickRoadmapBtn();
    await redmineRoadmapPage.checkPageUrl();
    await redmineRoadmapPage.clickRoadmapVersion();
    await expect(redmineRoadmapPage.todo.first()).toBeVisible();
  });
});
