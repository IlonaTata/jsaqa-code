const { test, expect } = require("@playwright/test");
const { login } = require("./user");
const { password } = require("./user");

test("test", async ({page}) => {
  await page.goto("https://netology.ru");
  await page.click("text=Каталог курсов");
  await page. screenshot ( { path : 'screenshot /visibleWindow.png' } );
  //await page.pause();
  await page.getByRole('link', { name: 'Войти' }).click();
  await page. screenshot ( { path : 'screenshot /visibleWindow1.png' } );
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill(login);
  await page.getByPlaceholder('Пароль').click();
  await page.getByPlaceholder('Пароль').fill(password);
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://netology.ru/profile' }*/),
    page.click('[data-testid="login-submit-btn"]')
  ]);
  expect (page.getByRole('heading', { name: 'Мои курсы и профессии' })).toBeVisible;
  await page. screenshot ( { path : 'screenshot /visibleWindow2.png' } );
  //assertion
  //await browser.close();
});

test("Opening a form with invalid data",async ({page}) => {
//const page = await browser.newPage();
await page.goto("https://netology.ru");
await page.click("text=Каталог курсов");
//await page.pause();
await page. screenshot ( { path : 'screenshot /visibleWindow3.png' } );
await page.getByRole('link', { name: 'Войти' }).click();
await page.getByPlaceholder('Email').click();
await page.getByPlaceholder('Email').fill("vasya-yyyyy@mail.ru");
await page.getByPlaceholder('Пароль').click();
await page.getByPlaceholder('Пароль').fill("123456789");
await page.click('[data-testid="login-submit-btn"]');
expect (page.getByText("Вы ввели неправильно логин или пароль")).toBeVisible;
await page. screenshot ( { path : 'screenshot /visibleWindow4.png' } );
//await browser.close();
});


