import { hello } from "./bonjour";

describe("GIVEN : Je veux retourner un bonjour suivit du prénom", () => {
  it("THEN : Bonjour Pierre", () => {
    expect(hello("Pierre")).toBe("Bonjour Pierre");
  });
});
