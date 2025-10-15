import { test, expect } from '@playwright/test';
import { loginToDemoApp } from './helpers/loginHelper';
import scenariosData from './data/scenarios.json';

type Scenario = {
  suite: string;
  task: string;
  column: string;
  tags: string[];
};

const scenarios: Scenario[] = scenariosData as Scenario[];

test.describe('Task Board Verification', () => {
  const suites = Array.from(new Set(scenarios.map(s => s.suite)));

  for (const suiteName of suites) {
    test.describe(suiteName, () => {
      const suiteScenarios = scenarios.filter(s => s.suite === suiteName);

      for (const scenario of suiteScenarios) {
        test(`Verify task "${scenario.task}" in column "${scenario.column}"`, async ({ page }) => {
          await loginToDemoApp(page);

          // Navigate to the suite section
          await page.click(`text=${scenario.suite}`);

          // Verify the task is in the correct column
          const taskCard = page.locator(
            `.flex-col:has(h2:has-text("${scenario.column}")) >> .bg-white.p-4:has-text("${scenario.task}")`
          );
          await expect(taskCard).toBeVisible();

          // Verify all tags
          for (const tag of scenario.tags) {
            await expect(taskCard.locator(`span.rounded-full:has-text("${tag}")`)).toBeVisible();
          }
        });
      }
    });
  }
});
