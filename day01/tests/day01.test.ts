import { test } from '../fixtures/userCredentials.fixture'
import { expect } from '@playwright/test'

test('Login as a viewer in staging environment', async({page, userCredentials}) => {
    await page.goto('https://www.saucedemo.com/')

    await page.fill('#user-name', userCredentials.username)
    await page.fill('#password', userCredentials.password)
    await page.click('#login-button')

    await expect(page).toHaveURL('https://www.saucedemo.com/')
})