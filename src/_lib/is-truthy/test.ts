import { isTruthy } from ".";

test("isTruthy()", () => {
	expect(isTruthy(1)).toBe(true);

	expect(isTruthy({})).toBe(true);

	expect(isTruthy([])).toBe(true);

	expect(isTruthy("")).toBe(false);

	expect(isTruthy(null)).toBe(false);

	expect(isTruthy(undefined)).toBe(false);
});
