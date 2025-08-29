import {test, expect} from '@playwright/test';
const ex_to_test = '/ex5-form.html';

test('form layout on large screens(>=992px)', async ({page}) => {
    await page.goto(ex_to_test);
    await page.setViewportSize({ width: 1000, height: 800 });

    const fullName = page.getByLabel('Full Name');
    const email = page.getByLabel('Email address');
    const gender = page.getByRole('radio').nth(0);
    const country = page.getByLabel('Country');
    const subscribe = page.getByRole('checkbox').nth(0);

    // All fields should still be visible
    await expect(fullName).toBeVisible();
    await expect(email).toBeVisible();
    await expect(gender).toBeVisible();
    await expect(country).toBeVisible();
    await expect(subscribe).toBeVisible();

    // Example layout expectation: Full Name and Email are side by side
    const fullNameBox = await fullName.boundingBox();
    const emailBox = await email.boundingBox();
    const genderBox = await gender.boundingBox();
    const countryBox = await country.boundingBox();
    const subscribeBox = await subscribe.boundingBox();

    if (fullNameBox && emailBox && genderBox) {
        expect(fullNameBox.y).toBeCloseTo(emailBox.y, 5);
        expect(fullNameBox.y).toBeCloseTo(genderBox.y - 4, 5);
    } else {
        throw new Error('Could not get bounding boxes for Full Name or Email fields.');
    }
    if (countryBox && subscribeBox) {
        expect(countryBox.y).toBeCloseTo(subscribeBox.y + 4, 5);
        expect(countryBox.y > fullNameBox.y).toBeTruthy();
    } else {
        throw new Error('Could not get bounding boxes for Country or Subscribe fields.');
    }
});

test('form layout on medium screen (768-991px)', async({page})=> {
    await page.goto(ex_to_test);
    await page.setViewportSize({ width: 990, height: 800 });

    const fullName = page.getByLabel('Full Name');
    const email = page.getByLabel('Email address');
    const gender = page.getByRole('radio').nth(0);
    const country = page.getByLabel('Country');
    const subscribe = page.getByRole('checkbox').nth(0);

    // All fields should still be visible
    await expect(fullName).toBeVisible();
    await expect(email).toBeVisible();
    await expect(gender).toBeVisible();
    await expect(country).toBeVisible();
    await expect(subscribe).toBeVisible();

    // Example layout expectation: Full Name and Email are side by side
    const fullNameBox = await fullName.boundingBox();
    const emailBox = await email.boundingBox();
    const genderBox = await gender.boundingBox();
    const countryBox = await country.boundingBox();
    const subscribeBox = await subscribe.boundingBox();

    if (fullNameBox && emailBox) {
        expect(fullNameBox.y).toBeCloseTo(emailBox.y, 5);
    } else {
        throw new Error('Could not get bounding boxes for Full Name or Email fields.');
    }
    if (countryBox && genderBox && subscribeBox) {
        expect(genderBox.y).toBeCloseTo(countryBox.y + 4, 5);
        expect(genderBox.y > fullNameBox.y + 10).toBeTruthy();
        expect(subscribeBox.y > countryBox.y + 10).toBeTruthy();
    } else {
        throw new Error('Could not get bounding boxes for Country or Subscribe fields.');
    }
    
})

test('form layout on small screen (<768px)', async({page})=> {
    await page.goto(ex_to_test);
    await page.setViewportSize({ width: 500, height: 600 });

    const fullName = page.getByLabel('Full Name');
    const email = page.getByLabel('Email address');
    const gender = page.getByRole('radio').nth(0);
    const country = page.getByLabel('Country');
    const subscribe = page.getByRole('checkbox').nth(0);

    // All fields should still be visible
    await expect(fullName).toBeVisible();
    await expect(email).toBeVisible();
    await expect(gender).toBeVisible();
    await expect(country).toBeVisible();
    await expect(subscribe).toBeVisible();

    // Example layout expectation: Full Name and Email are side by side
    const fullNameBox = await fullName.boundingBox();
    const emailBox = await email.boundingBox();
    const genderBox = await gender.boundingBox();
    const countryBox = await country.boundingBox();
    const subscribeBox = await subscribe.boundingBox();
    if (fullNameBox && emailBox && countryBox && genderBox && subscribeBox) {
        expect(emailBox.y > fullNameBox.y + 50).toBeTruthy();
        expect(genderBox.y > emailBox.y + 50).toBeTruthy();
        expect(countryBox.y > genderBox.y + 50).toBeTruthy();
    } else {
        throw new Error('Could not get bounding boxes for Country or Subscribe fields.');
    }
    
})