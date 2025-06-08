import { test, expect} from '@playwright/test'
import { request } from 'http'

test.describe('API Testing with Playwright', () => {
    test('GET Request: Fetch user data', async({request})=>{
        const response = await request.get('https://jsonplaceholder.typicode.com/users/1')
        expect(response.status()).toBe(200)

        const responseBody = await response.json()
        expect(responseBody).toHaveProperty('id', 1)
        expect(responseBody).toHaveProperty('name', 'Leanne Graham')
    })

    test('POST Request: Create a new post', async({request}) => {
        const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
            data: {
                title: 'foo',
                body: 'bar',
                userId: 1
            }
        })
        expect(response.status()).toBe(201)

        const responseBody = await response.json()
        expect(responseBody).toHaveProperty('title', 'foo')
        expect(responseBody).toHaveProperty('body', 'bar')
        expect(responseBody).toHaveProperty('userId', 1)
    })
})