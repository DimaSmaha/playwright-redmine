// playwright-dev-page.ts

//in ts page object pattern looks like this

import { expect, Locator, Page } from "@playwright/test";

export class RedmineHomePage {
  readonly page: Page;
  readonly signInBtn: Locator;
  readonly myAccountBtn: Locator;
  readonly registerBtn: Locator;
  readonly helpBtn: Locator;
  readonly roadmapBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signInBtn = page.locator("text=Sign in");
    this.myAccountBtn = page.locator("text=My Account");
    this.registerBtn = page.locator('a:has-text("Register")');
    this.helpBtn = page.locator("#top-menu >> text=Help");
    this.roadmapBtn = page.locator("text=Roadmap");
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

  async clickHelpBtn() {
    await this.helpBtn.click();
  }

  async clickRoadmapBtn() {
    await this.roadmapBtn.click();
  }
}
