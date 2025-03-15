// const {test, expect} = require('@playwright/test')
import {test, expect} from '@playwright/test'

// const {hello, helloWorld} = require('./demo/hello')
// import { hello, helloWorld } from './demo/hello'

// console.log(hello());
// console.log(helloWorld());

test('My First Test', async ({page}) => {

    await page.goto('https://google.com')
    await expect(page).toHaveTitle('Google')

})