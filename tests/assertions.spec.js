import test, {page, expect} from '@playwright/test'

test('Assertion Demo', async({page}) => {

    await page.goto('https://kitchen.applitools.com/')
    // await page.pause();

    //assertions

    //check element present or not
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1)

    if(await page.getByRole('heading', { name: 'The Kitchen' })){
        console.log("Element is present");
        await page.getByRole('heading', { name: 'The Kitchen' }).click()
    }

    //check element hidden or visible
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeVisible()
    await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeHidden()

    //check element enabled or disabled
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeEnabled()
    await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeDisabled()

    //check text
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveText('The Kitchen')
    await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).not.toHaveText('ABCD')

    //check attribute value
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveAttribute('class', /.*css-dpmy2a/)
    await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toHaveClass(/.*css-dpmy2a/)

    //check page URL
    await expect(page).toHaveURL('https://kitchen.applitools.com/')

    //check page title
    await expect(page).toHaveTitle(/.*Kitchen/)

    // await page.pause()
    //visual validation with screenshot
    await expect(page).toHaveScreenshot()

})