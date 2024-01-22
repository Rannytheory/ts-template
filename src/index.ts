import "dotenv/config";
import logger from "./logger";

logger.info("Hello world!");
logger.debug(process.env);

export function add(a: number, b: number): number {
    return a + b;
}