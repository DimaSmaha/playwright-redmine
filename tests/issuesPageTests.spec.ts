import { test, expect } from "@playwright/test";
import { RedmineIssuesPage } from "./../pages/redmineIssuesPage.page";
import { RedmineHomePage } from "../pages/redmineHomePage.page";

const maimMenuBtns = [
  "Overview",
  "Download",
  "Activity",
  "Roadmap",
  "Issues",
  "News",
  "Wiki",
  "Forums",
  "Repository",
];

test.describe("Issues page tests", () => {
  test.beforeEach(async ({ page }) => {
    let redmineHomePage = new RedmineHomePage(page);
    await redmineHomePage.goto();
    await page.waitForLoadState();
    await redmineHomePage.checkPageUrl();
  });

  test("Should select filter", async ({ page }) => {
    let redmineHomePage = new RedmineHomePage(page);
    let redmineIssuesPage = new RedmineIssuesPage(page);
    await expect(redmineHomePage.mainMenu).toContainText(maimMenuBtns);
    await redmineHomePage.issuesBtn.click();
    await redmineIssuesPage.selectFilter("tracker_id");
    await redmineIssuesPage.selectOption("2");
    await redmineIssuesPage.clickApplyBtn();
    await expect(page.locator(":nth-match(:text('Feature'), 7)")).toBeVisible();
  });
});
