import { replaceDoubleHyphenWithEmDash } from "@/lib/strings";

describe("replaceDoubleHyphenWithEmDash", () => {
  it("should replace double hyphens with em dash", () => {
    const input = "testing -- double hyphen";
    const expected = "testing — double hyphen";

    const result = replaceDoubleHyphenWithEmDash(input);

    expect(result).toBe(expected);
  });

  it("should not change single hyphens", () => {
    const input = "testing - single hyphen";
    const expected = "testing - single hyphen";

    const result = replaceDoubleHyphenWithEmDash(input);

    expect(result).toBe(expected);
  });

  it("should not change text without double hyphens", () => {
    const input = "testing without double hyphen";
    const expected = "testing without double hyphen";

    const result = replaceDoubleHyphenWithEmDash(input);

    expect(result).toBe(expected);
  });

  it("should handle empty strings", () => {
    const input = "";
    const expected = "";

    const result = replaceDoubleHyphenWithEmDash(input);

    expect(result).toBe(expected);
  });

  it("should handle strings with multiple double hyphens", () => {
    const input = "testing -- double -- hyphen";
    const expected = "testing — double — hyphen";

    const result = replaceDoubleHyphenWithEmDash(input);

    expect(result).toBe(expected);
  });
});
