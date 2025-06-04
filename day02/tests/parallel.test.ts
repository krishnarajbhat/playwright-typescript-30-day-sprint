import { test, expect} from '@playwright/test'

test.describe('Parallel Test Execution', () => {
    test('Test 1: Navigate to SauceDemo', async({page}) => {
        await page.goto('https://www.saucedemo.com/')
        await expect(page).toHaveTitle(/Swag Labs/)
    })

    test('Test 2: Navigate to Playwright', async({page}) => {
        await page.goto('https://playwright.dev/')
        await expect(page).toHaveTitle(/Playwright/)
    })

    test('Test 3: Navigate to GitHub', async({page}) => {
        await page.goto('https://github.com/')
        await expect(page).toHaveTitle(/GitHub/)
    })
})