import { expect } from "chai";
import * as puppeteer from "puppeteer";

describe("/", () => {
  it("should contain all posts", async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("http://localhost:4000");

    const posts = await page.evaluate(() => {
      return Array.from(document.querySelectorAll("ul.posts li"));
    });

    expect(posts.length).to.be.equal(24);

    browser.close();
  });
});
