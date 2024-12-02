import { test, expect } from "@playwright/test";

test.describe("Next.js Interactive Page Tests", () => {
  test("should render the home page", async ({ page }) => {
    await page.goto("http://localhost:3000");

    const header = page.locator("h1");
    await expect(header).toHaveText("Interactive Playwright Test");
  });

  test("should allow user to enter a name and see a greeting", async ({
    page,
  }) => {
    await page.goto("http://localhost:3000");
    await page.fill("#name", "John Doe");
    await page.click('button[type="submit"]');
    const greeting = page.locator('[data-testid="greeting"]');

    await expect(greeting).toHaveText("Hello, John Dove!");
  });

  test("should navigate to About page and back", async ({ page }) => {
    await page.goto("http://localhost:3000");

    // Click the About link
    await page.click("text=Go to About Page");

    // Verify navigation to About page
    const aboutHeader = page.locator("h1");
    await expect(aboutHeader).toHaveText("About Page");

    // Click the back link
    await page.click("text=Back to Home");

    // Verify navigation back to the Home page
    const homeHeader = page.locator("h1");
    await expect(homeHeader).toHaveText("Interactive Playwright Test");
  });
});
