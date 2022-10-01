// playwright-dev-page.ts
import { expect, Locator, Page } from "@playwright/test";

export class RedmineSearchPage {
  readonly page: Page;
  readonly scopeSelect: Locator;
  readonly titleChb: Locator;
  readonly sendBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.scopeSelect = page.locator('select[name="scope"]');
    this.titleChb = page.locator(
      'text=Search titles only >> input[name="titles_only"]'
    );
    this.sendBtn = page.locator("text=Submit");
  }

  async checkPageUrl() {
    await expect(this.page).toContain("/projects/redmine/search");
  }

  async goto() {
    await this.page.goto("/projects/redmine/search");
  }

  async selectScope(option: string) {
    await this.scopeSelect.selectOption(option);
  }

  async checkTitleChb() {
    await this.titleChb.check();
  }
}
