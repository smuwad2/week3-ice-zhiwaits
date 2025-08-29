import {test, expect} from "@playwright/test"

const ex_to_test = "/ex2.html"
test("ex2 on large screen (>=992px)", async({page})=> {
    await page.goto(ex_to_test)
    await page.setViewportSize({ width: 1000, height: 800 });
    const div1of2 = page.getByText("1 of 2");
    const div2of2 = page.getByText("2 of 2");
    await expect(div1of2).toBeVisible();
    await expect(div2of2).toBeVisible();

    const div1of2box = await div1of2.boundingBox();
    const div2of2box = await div2of2.boundingBox();
    if (div1of2box && div2of2box) { 
        expect(div1of2box.y).toBeCloseTo(div2of2box.y, 5);
        expect(div1of2box.width).toEqual(div2of2box.width);
    } else {
        throw new Error("Could not get bounding boxes for divs.");
    }

    const div1of3 = page.getByText("1 of 3");
    const div2of3 = page.getByText("2 of 3 (wider)");
    const div3of3 = page.getByText("3 of 3");
    const div1of3box = await div1of3.boundingBox();
    const div2of3box = await div2of3.boundingBox();
    const div3of3box = await div3of3.boundingBox();
    if (div1of3box && div2of3box && div3of3box) {
        expect(div1of3box.y).toBeCloseTo(div2of3box.y, 5);
        expect(div2of3box.y).toBeCloseTo(div3of3box.y, 5);
        expect(div2of3box.width).toEqual(div1of3box.width*2);
        expect(div3of3box.y).toBeCloseTo(div3of3box.y, 5);
        expect(div1of3box.y > div1of2box.y+20).toBeTruthy();
    }

    const div1of4 = page.getByText("1 of 4");
    const div2of4 = page.getByText("2 of 4");
    const div3of4 = page.getByText("3 of 4");
    const div4of4 = page.getByText("4 of 4");
    const div1of4box = await div1of4.boundingBox();
    const div2of4box = await div2of4.boundingBox();
    const div3of4box = await div3of4.boundingBox();
    const div4of4box = await div4of4.boundingBox();
    if (div1of4box && div2of4box && div3of4box && div4of4box && div1of3box) {
        expect(div1of4box.y).toBeCloseTo(div2of4box.y, 5);
        expect(div2of4box.y).toBeCloseTo(div3of4box.y, 5);
        expect(div3of4box.y).toBeCloseTo(div4of4box.y, 5);
        expect(Math.round(div2of4box.width)).toEqual(Math.round(div1of4box.width*2));
        expect(Math.round(div3of4box.width)).toEqual(Math.round(div1of4box.width*2));
        expect(Math.round(div4of4box.width)).toEqual(Math.round(div1of4box.width));
        expect(div1of4box.y > div1of3box.y+20).toBeTruthy();
    }
});

test("ex2 on medium screen (768-991px)", async({page})=> {
    await page.goto(ex_to_test)
    await page.setViewportSize({ width: 990, height: 800 });
    const div1of2 = page.getByText("1 of 2");
    const div2of2 = page.getByText("2 of 2");
    await expect(div1of2).toBeVisible();
    await expect(div2of2).toBeVisible();

    const div1of2box = await div1of2.boundingBox();
    const div2of2box = await div2of2.boundingBox();
    if (div1of2box && div2of2box) { 
        expect(div1of2box.y).toBeCloseTo(div2of2box.y, 5);
        expect(div1of2box.width).toEqual(div2of2box.width);
    } else {
        throw new Error("Could not get bounding boxes for divs.");
    }

    const div1of3 = page.getByText("1 of 3");
    const div2of3 = page.getByText("2 of 3 (wider)");
    const div3of3 = page.getByText("3 of 3");
    const div1of3box = await div1of3.boundingBox();
    const div2of3box = await div2of3.boundingBox();
    const div3of3box = await div3of3.boundingBox();
    if (div1of3box && div2of3box && div3of3box) {
        expect(div1of3box.y).toBeCloseTo(div2of3box.y, 5);
        expect(div2of3box.y).toBeCloseTo(div3of3box.y, 5);
        expect(div2of3box.width).toEqual(div1of3box.width*2);
        expect(div3of3box.y).toBeCloseTo(div3of3box.y, 5);
        expect(div1of3box.y > div1of2box.y+20).toBeTruthy();
    }

    const div1of4 = page.getByText("1 of 4");
    const div2of4 = page.getByText("2 of 4");
    const div3of4 = page.getByText("3 of 4");
    const div4of4 = page.getByText("4 of 4");
    const div1of4box = await div1of4.boundingBox();
    const div2of4box = await div2of4.boundingBox();
    const div3of4box = await div3of4.boundingBox();
    const div4of4box = await div4of4.boundingBox();
    if (div1of4box && div2of4box && div3of4box && div4of4box && div1of3box) {
        expect(div2of4box.y > div1of4box.y+20).toBeTruthy();
        expect(div3of4box.y > div2of4box.y+20).toBeTruthy();
        expect(div4of4box.y > div3of4box.y+20).toBeTruthy();
        expect(Math.round(div2of4box.width)).toEqual(Math.round(div1of4box.width));
        expect(Math.round(div3of4box.width)).toEqual(Math.round(div1of4box.width));
        expect(Math.round(div4of4box.width)).toEqual(Math.round(div1of4box.width));
        expect(div1of4box.y > div1of3box.y+20).toBeTruthy();
    }
});

test("ex2 on small screen (576-<768px)", async({page})=> {
    await page.goto(ex_to_test)
    await page.setViewportSize({ width: 576, height: 600 });
    const div1of2 = page.getByText("1 of 2");
    const div2of2 = page.getByText("2 of 2");
    await expect(div1of2).toBeVisible();
    await expect(div2of2).toBeVisible();

    const div1of2box = await div1of2.boundingBox();
    const div2of2box = await div2of2.boundingBox();
    if (div1of2box && div2of2box) { 
        expect(div1of2box.y).toBeCloseTo(div2of2box.y, 5);
        expect(div1of2box.width).toEqual(div2of2box.width);
    } else {
        throw new Error("Could not get bounding boxes for divs.");
    }

    const div1of3 = page.getByText("1 of 3");
    const div2of3 = page.getByText("2 of 3 (wider)");
    const div3of3 = page.getByText("3 of 3");
    const div1of3box = await div1of3.boundingBox();
    const div2of3box = await div2of3.boundingBox();
    const div3of3box = await div3of3.boundingBox();
    if (div1of3box && div2of3box && div3of3box) {
        expect(div2of3box.y > div1of3box.y + 20).toBeTruthy();
        expect(div3of3box.y > div2of3box.y + 20).toBeTruthy();
        expect(Math.round(div1of3box.width)).toEqual(Math.round(div2of3box.width)); 
        expect(Math.round(div3of3box.width)).toEqual(Math.round(div2of3box.width));
    }

    const div1of4 = page.getByText("1 of 4");
    const div2of4 = page.getByText("2 of 4");
    const div3of4 = page.getByText("3 of 4");
    const div4of4 = page.getByText("4 of 4");
    const div1of4box = await div1of4.boundingBox();
    const div2of4box = await div2of4.boundingBox();
    const div3of4box = await div3of4.boundingBox();
    const div4of4box = await div4of4.boundingBox();
    if (div1of4box && div2of4box && div3of4box && div4of4box && div1of3box) {
        expect(div2of4box.y > div1of4box.y+20).toBeTruthy();
        expect(div3of4box.y > div2of4box.y+20).toBeTruthy();
        expect(div4of4box.y > div3of4box.y+20).toBeTruthy();
        expect(Math.round(div2of4box.width)).toEqual(Math.round(div1of4box.width));
        expect(Math.round(div3of4box.width)).toEqual(Math.round(div1of4box.width));
        expect(Math.round(div4of4box.width)).toEqual(Math.round(div1of4box.width));
        expect(div1of4box.y > div1of3box.y+20).toBeTruthy();
    }
});

test("ex2 on extra small screen (<576px)", async({page})=> {
    await page.goto(ex_to_test)
    await page.setViewportSize({ width: 575, height: 600 });
    const div1of2 = page.getByText("1 of 2");
    const div2of2 = page.getByText("2 of 2");
    await expect(div1of2).toBeVisible();
    await expect(div2of2).toBeVisible();

    const div1of2box = await div1of2.boundingBox();
    const div2of2box = await div2of2.boundingBox();
    const div1of3 = page.getByText("1 of 3");
    const div2of3 = page.getByText("2 of 3 (wider)");
    const div3of3 = page.getByText("3 of 3");
    const div1of3box = await div1of3.boundingBox();
    const div2of3box = await div2of3.boundingBox();
    const div3of3box = await div3of3.boundingBox();
    if (div1of2box && div2of2box && div1of3box && div2of3box && div3of3box) {
        expect(div2of2box.y > div1of2box.y + 20).toBeTruthy();
        expect(div2of3box.y > div1of3box.y + 20).toBeTruthy();
        expect(div3of3box.y > div2of3box.y + 20).toBeTruthy();
        expect(Math.round(div1of2box.width)).toEqual(Math.round(div2of2box.width));
        expect(Math.round(div1of3box.width)).toEqual(Math.round(div2of3box.width)); 
        expect(Math.round(div3of3box.width)).toEqual(Math.round(div2of3box.width));
    }

    const div1of4 = page.getByText("1 of 4");
    const div2of4 = page.getByText("2 of 4");
    const div3of4 = page.getByText("3 of 4");
    const div4of4 = page.getByText("4 of 4");
    const div1of4box = await div1of4.boundingBox();
    const div2of4box = await div2of4.boundingBox();
    const div3of4box = await div3of4.boundingBox();
    const div4of4box = await div4of4.boundingBox();
    if (div1of4box && div2of4box && div3of4box && div4of4box && div1of3box) {
        expect(div2of4box.y > div1of4box.y+20).toBeTruthy();
        expect(div3of4box.y > div2of4box.y+20).toBeTruthy();
        expect(div4of4box.y > div3of4box.y+20).toBeTruthy();
        expect(Math.round(div2of4box.width)).toEqual(Math.round(div1of4box.width));
        expect(Math.round(div3of4box.width)).toEqual(Math.round(div1of4box.width));
        expect(Math.round(div4of4box.width)).toEqual(Math.round(div1of4box.width));
        expect(div1of4box.y > div1of3box.y+20).toBeTruthy();
    }
});