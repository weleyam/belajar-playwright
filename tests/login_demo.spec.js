import {test, expect} from '@playwright/test'

test('Demo Login Test 1', async({page}) => {

    await page.goto('https://demo.applitools.com/')
    
    await page.pause()

    await page.getByRole('textbox', { name: 'Enter your username' }).fill('Weleyam')

    await page.getByRole('textbox', { name: 'Enter your password' }).fill('12345')

    await page.getByRole('link', { name: 'Sign in' }).click()

    await expect(page).toHaveURL('https://demo.applitools.com/app.html');


})

test('Demo Login Test 2', async({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
    // await page.pause()

    await page.getByRole('textbox', { name: 'Username' }).fill('Admin')

    await page.getByRole('textbox', { name: 'Password' }).fill('admin123')

    await page.getByRole('button', { name: 'Login' }).click()

    await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index', { timeout: 5000 });

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

    await expect(page).toHaveURL(/.*\/dashboard\/index/);

})

test('Demo Login Test 3', async({page}) => {

    await page.goto('https://admin-demo.nopcommerce.com/login');
    await page.getByRole('textbox', { name: 'Email:' }).click();
    await page.getByRole('textbox', { name: 'Email:' }).press('ControlOrMeta+a');
    await page.getByRole('textbox', { name: 'Email:' }).fill('admin@yourstore.com');
    await page.getByRole('textbox', { name: 'Password:' }).click();
    await page.getByRole('textbox', { name: 'Password:' }).press('ControlOrMeta+a');
    await page.getByRole('textbox', { name: 'Password:' }).fill('admin');
    await page.getByRole('button', { name: 'Log in' }).click();
})