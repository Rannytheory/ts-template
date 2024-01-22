import { expect, test } from "vitest"
import logger from "../src/logger";
import { add } from "../src/index";

test("should pass", () => {
    logger.info;
    expect(!!logger.info).toBe(!!logger.info);
});

test("should imports work", () => {
    expect(add(1, 2)).toBe(3);
});