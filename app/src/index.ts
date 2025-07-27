import "dotenv/config";
import { Logger } from "@repo/logger";

const logger = new Logger("main", "debug");
logger.info("Hello world!");
logger.debug("This is a debug message");
logger.error("This is an error message");
logger.warn("This is a warning message");
logger.success("This is a success message");
logger.log("Standard log");

export function add(a: number, b: number): number {
    return a + b;
}