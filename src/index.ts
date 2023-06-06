import "dotenv/config";
import logger from "./logger";

logger.info("Hello world!");
logger.debug(process.env);