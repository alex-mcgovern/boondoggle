import { formatter, parser } from ".";

test("regex parser", () => {
    expect(parser("$ 100", "$")).toBe("100");
    expect(parser("$100", "$")).toBe("100");
    expect(parser("$ 100.10", "$")).toBe("100.10");
    expect(parser("$100.10", "$")).toBe("100.10");
    expect(parser("$ 100,000", "$")).toBe("100000");
    expect(parser("$100,000", "$")).toBe("100000");
    expect(parser("$ 100,000,000", "$")).toBe("100000000");
    expect(parser("$100,000,000", "$")).toBe("100000000");
});

test("regex formatter", () => {
    expect(formatter("", "$")).toBe("$ ");
    expect(formatter("100", "$")).toBe("$ 100");
    expect(formatter("100.10", "$")).toBe("$ 100.10");
    expect(formatter("100000.10", "$")).toBe("$ 100,000.10");
    expect(formatter("100000", "$")).toBe("$ 100,000");
    expect(formatter("100000000", "$")).toBe("$ 100,000,000");
    expect(formatter("100000000000", "$")).toBe("$ 100,000,000,000");
    expect(formatter("$ 100", "$")).toBe("$ 100");
    expect(formatter("$ 100000", "$")).toBe("$ 100,000");
    expect(formatter("£ 100000", "$")).toBe("$ 100,000");
});
