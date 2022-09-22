// playwright-dev-page.ts

// in js u can not declare pages and locators
// and can start from constructor
// in js page objects look like this

import { expect, Locator, Page } from "@playwright/test";

export class RedmineHelpPage {
  /**
   * @param {import('@playwright/test').Page} page
   */

  constructor(page) {
    this.page = page;
    this.goToTranslationsBtn = page.locator(
      'a:has-text("Translations of the Redmine guide")'
    );
    this.frenchLang = page.locator("text=French");
  }

  async checkPageUrl() {
    await expect(this.page).toHaveURL("/guide");
  }

  async goto() {
    await this.page.goto("/guide");
  }

  async clickGoToTranslationsBtn() {
    await this.goToTranslationsBtn.click();
  }

  async clickFrenchLanguageBtn() {
    await this.frenchLang.click();
  }
}
