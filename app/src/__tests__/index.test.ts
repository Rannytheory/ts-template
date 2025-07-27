import { test } from "node:test"
import * as assert from "node:assert";
import { add } from "../index.js";

test("a basic concept", () => {
    assert.strictEqual(add(1, 2), 3);
});