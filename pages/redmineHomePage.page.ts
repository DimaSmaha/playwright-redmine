// playwright-dev-page.ts
import { expect, Locator, Page } from "@playwright/test";

export class RedmineHomePage {
  readonly page: Page;
  readonly signInBtn: Locator;
  readonly myAccountBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signInBtn = page.locator("text=Sign in");
    this.myAccountBtn = page.locator("text=My Account");
  }

  async checkPageUrl() {
    await expect(this.page).toHaveURL("");
  }

  async goto() {
    await this.page.goto("");
  }

  async clickSignInBtn() {
    await this.signInBtn.click();
    await expect(this.page).toHaveURL("https://www.redmine.org/login");
  }
}
