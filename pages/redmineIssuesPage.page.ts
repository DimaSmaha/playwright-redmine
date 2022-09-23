// playwright-dev-page.ts
import { expect, Locator, Page } from "@playwright/test";

export class RedmineIssuesPage {
  readonly page: Page;
  readonly addFilterSelect: Locator;
  readonly optionSelect: Locator;
  readonly applyBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addFilterSelect = page.locator('[id="add_filter_select"]');
    this.optionSelect = page.locator('select[name="v\\[tracker_id\\]\\[\\]"]');
    this.applyBtn = page.locator("text=Apply");
  }

  async checkPageUrl() {
    await expect(this.page).toHaveURL("/projects/redmine/issues'");
  }

  async goto() {
    await this.page.goto("/projects/redmine/issues'");
  }

  async selectFilter(option: string) {
    await this.addFilterSelect.selectOption(option);
  } //.selectOption('tracker_id')

  async selectOption(option: string) {
    await this.optionSelect.selectOption(option);
  } // .selectOption('2');

  async clickApplyBtn() {
    await this.applyBtn.click();
  }
}
