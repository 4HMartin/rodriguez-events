import { test } from '@playwright/test';

test('Probar header en WebKit (MacOS)', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.waitForTimeout(3000);
  await page.mouse.wheel(0,400);
  await page.pause();
});