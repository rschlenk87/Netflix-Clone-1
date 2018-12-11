import winston, { createLogger } from "winston";
import { NODE_ENV } from "./secrets";

const logger = createLogger({
  transports: [
    new winston.transports.Console({
      level: process.env.NODE_ENV === "production" ? "error" : "debug"
    }),
    new winston.transports.File({ filename: "debug.log", level: "debug" })
  ]
});

if (NODE_ENV !== "production") {
  logger.debug("Logging initialized at debug level");
}

export default logger;