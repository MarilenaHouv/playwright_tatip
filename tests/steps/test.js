const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

let browser, page;

Given('User opens the Google homepage', async () => {
  browser = await chromium.launch({ headless: false }); // launch browser
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://www.google.com'); // go to Google
});

// can you find a different way to do this using pick locator tool?
When('User searches for {string}', async (searchQuery) => {
  const searchBox = page.locator('textarea[name="q"]') 
  // fill in the search box with the website you want to look up
  //or use searchQuery variable and change test.feature file
  await searchBox.fill("wikipedia website"); 
  await searchBox.press('Enter'); // press Enter to search
  await page.waitForLoadState('networkidle'); // wait for search results to load
});

When('User clicks on the first search result', async () => {
  //change website you want to click on 
  const firstResult = await page.getByRole('link', { name: 'Website Wikipedia https://en.' });
  await firstResult.click(); // Click on the first search result
  await page.waitForLoadState('domcontentloaded'); // Ensure the page loads
});



// Then('User interacts with the page', async () => {
//   // TODO: Students fill in this section
//   // Example interactions: Click a button, fill a form, etc.
//   // Example: await page.click('text=Documentation');
//   //the next two lines currently click on wikipedias "view source" page
//   const clickElement = await page.getByRole('link', { name: 'View source' });
//   await clickElement.click();
// });
