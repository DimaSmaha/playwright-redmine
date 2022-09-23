// playwright-dev-page.ts
import { expect, Locator, Page } from "@playwright/test";

export class RedmineRoadmapPage {
  readonly page: Page;
  readonly roadmapVer: Locator;
  readonly todo: Locator;

  constructor(page: Page) {
    this.page = page;
    this.roadmapVer = page.locator("#roadmap >> text=5.1.0");
    this.todo = page.locator(".todo");
  }

  async checkPageUrl() {
    await expect(this.page).toHaveURL("/projects/redmine/roadmap");
  }

  async goto() {
    await this.page.goto("/projects/redmine/roadmap");
  }

  async clickRoadmapVersion() {
    await this.roadmapVer.click();
  }
}
