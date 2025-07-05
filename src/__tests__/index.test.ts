import { test } from "node:test"
import * as assert from "node:assert";
import logger from "../logger";
import { add } from "../index";

test("should pass", () => {
    logger.info;
    assert.strictEqual(typeof logger.info, "function");
});

test("a basic concept", () => {
    assert.strictEqual(add(1, 2), 3);
});