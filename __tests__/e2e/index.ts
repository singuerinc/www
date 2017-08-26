import { expect } from "chai";
import * as puppeteer from "puppeteer";

describe("/", () => {
  let page;
  let browser;

  beforeEach(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto("http://localhost:4000");
  });

  afterEach(() => {
    browser.close();
  });

  it("should contain all posts", async () => {
    const posts = await page.evaluate(() => {
      return Array.from(document.querySelectorAll("ul.posts li"));
    });

    expect(posts.length).to.be.equal(24);
  });

  it("should contain 7 sidebar links on desktop", async () => {
    const links = await page.evaluate(() => {
      return Array.from(document.querySelectorAll(".sidebar nav > ul > li > a"));
    });

    expect(links.length).to.be.equal(7);
  });

  it("should contain 7 sidebar links on mobile", async () => {
    const links = await page.evaluate(() => {
      return Array.from(document.querySelectorAll(".sidebar-mobile nav > ul > li > a"));
    });

    expect(links.length).to.be.equal(7);
  });
});
