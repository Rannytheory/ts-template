export type LogLevel = (typeof LOG_LEVELS)[number];
export const LOG_LEVELS = ["debug", "info", "warn", "error"] as const;

export const DEFAULT_LOG_LEVEL = "info";

export function getLogLevelIndex(logLevel: LogLevel): number {
    return ["debug", "info", "warn", "error"].indexOf(logLevel);
}

export function matchLogLevel(currentLevel: LogLevel, targetLevel: LogLevel): boolean {
    return getLogLevelIndex(currentLevel) <= getLogLevelIndex(targetLevel);
}