import { expect, test } from '@playwright/test'

test.describe('Home Page', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/')
	})

	test('has expected title', async ({ page }) => {
		await expect(page).toHaveTitle(/Home/)
	})
})
