import { inspect } from "node:util";
import { matchLogLevel, type LogLevel } from "./LogLevel.js";
import chalk from "chalk";

export class Logger {
    private readonly topic: string;
    private readonly logLevel: LogLevel;

    public constructor(topic: string, logLevel: LogLevel = "info") {
        this.topic = topic;
        this.logLevel = logLevel;
    }

    private _log(
        consoleMethod: "debug" | "info" | "warn" | "error" | "log",
        color: "blue" | "gray" | "green" | "red" | "yellow" | null,
        icon: string | null,
        values: unknown[]
    ) {
        const prefix = `[${this.topic}]` + (icon === null ? "" : `[${icon}]`);
        const texts = [prefix, ...values];
        return console[consoleMethod](
            ...texts.map((val) => {
                const text = (
                    typeof val === 'string' ? val : inspect(val, { colors: true })
                ).replaceAll(/(\r?\n)/g, icon === null ? "$1" : "$1  ");
                return color ? chalk[color](text) : text;
            })
        );
    }

    private shouldLog(targetLevel: LogLevel): boolean {
        return matchLogLevel(this.logLevel, targetLevel);
    }

    public debug(...values: unknown[]) {
        if(this.shouldLog("debug")) {
            return this._log("log", "blue", "*", values);
        }
    }

    public error(...values: unknown[]) {
        if(this.shouldLog("error")) {
            return this._log("error", "red", "X", values);
        }
    }

    public info(...values: unknown[]) {
        if(this.shouldLog("info")) {
            return this._log("log", "green", "I", values);
        }
    }

    public warn(...values: unknown[]) {
        if(this.shouldLog("warn")) {
            return this._log("warn", "yellow", "W", values);
        }
    }

    public success(...values: unknown[]) {
        if(this.shouldLog("info")) {
            return this._log("log", "green", "S", values);
        }
    }

    public log(...values: unknown[]) {
        if(this.shouldLog("info")) {
            console.log(...values);
        }
    }
}