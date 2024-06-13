/* eslint-disable @typescript-eslint/no-explicit-any */

import type { TestingLibraryMatchers } from "@testing-library/jest-dom/matchers";

import "vitest";

declare global {
    namespace Vi {
        interface Assertion<T = any> extends TestingLibraryMatchers<T, void> {}
    }
}
