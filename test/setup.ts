import "@testing-library/jest-dom";
import * as matchers from "@testing-library/jest-dom/matchers";
import { cleanup } from "@testing-library/react";
import { afterEach, expect } from "vitest";
import failOnConsole from "vitest-fail-on-console";

expect.extend(matchers);

failOnConsole({
    shouldFailOnDebug: true,
    shouldFailOnError: true,
    shouldFailOnInfo: true,
    shouldFailOnLog: true,
    shouldFailOnWarn: true,
});

afterEach(() => {
    cleanup();
});
