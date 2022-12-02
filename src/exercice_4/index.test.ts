import { whoIsBigger } from "./index";

describe("GIVEN : Retourner le plus grand nombre", () => {
  it("THEN : 6", () => {
    expect(whoIsBigger(4, 6, 5)).toBe(6);
  });
});
