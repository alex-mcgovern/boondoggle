import { slugify } from "..";

test("slugify()", () => {
	expect(slugify("This is a test")).toBe("this-is-a-test");

	expect(slugify("This is a test!")).toBe("this-is-a-test");
});
