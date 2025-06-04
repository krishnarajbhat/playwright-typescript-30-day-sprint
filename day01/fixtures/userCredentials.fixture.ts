import {test as base} from '@playwright/test'

//Define a customer fixture for user credentials
type TestFixtures = {
    config: { environment: string }
    userCredentials: { username: string, password: string }
}

export const test = base.extend<TestFixtures>({
    config: async({}, use) => {
        const config = { environment: 'staging' }
        await use(config)
    },

    userCredentials: async ({config}, use, testInfo) => {
        const users = {
            staging: {
                admin: {username: 'stageAdmin', password: 'stagePass123'},
                viewer: {username: 'standard_user', password: 'secret_sauce'},
                editor: {username: 'standard_user', password: 'secret_sauce'}
            },
            production: {
                admin: {username: 'prodAdmin', password: 'prodPass123'},
                viewer: {username: 'prodViewer', password: 'prodView123'},
                editor: {username: 'prodViewer', password: 'prodView123'}
            },
            qa: {
                admin: {username: 'qaAdmin', password: 'Pass123'},
                viewer: {username: 'qaViewer', password: 'View123'},
                editor: {username: 'qaEditor', password: 'edit123'}
            }

        }

        const role = testInfo.title.includes('viewer') ? 'viewer' : testInfo.title.includes('editor') ? 'editor' : 'admin'        
        const credentials = users[config.environment][role]
        await use(credentials)
    }
})