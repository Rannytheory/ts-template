import { test } from "node:test"
import * as assert from "node:assert";
import logger from "@me/logger";
import { add } from "@me/index";

test("should pass", () => {
    logger.info;
    assert.strictEqual(typeof logger.info, "function");
});

test("a basic concept", () => {
    assert.strictEqual(add(1, 2), 3);
});