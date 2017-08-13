import { expect } from "chai";
import { Chromeless } from "chromeless";

describe("a", () => {
  it("b", async () => {
    const chromeless = new Chromeless();

    await chromeless.goto("http://localhost:4000");

    const result = await chromeless.exists("ul.posts li");

    expect(result).to.be.true;

    await chromeless.end();
  });
});
