import type { TestingLibraryMatchers } from "@testing-library/jest-dom/matchers";

import "vitest";

declare global {
	// biome-ignore lint/style/noNamespace: This is a test config file, so it's okay to use a namespace here.
	namespace Vi {
		// biome-ignore lint/suspicious/noExplicitAny:  This is a test config file, so it's okay to use `any` here.
		interface Assertion<T = any> extends TestingLibraryMatchers<T, void> {}
	}
}
