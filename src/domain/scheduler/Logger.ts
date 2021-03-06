import winston from "winston";
const colorizer = winston.format.colorize();

export const logger = winston.createLogger({
	level: "info",
	format: winston.format.combine(
		winston.format.timestamp({
			format: "YYYY-MM-DD HH:mm:ss",
		}),
		winston.format.errors({ stack: true }),
		winston.format.splat(),

		winston.format.prettyPrint(),
		winston.format.colorize({ all: true })
	),
	transports: [
		//
		// - Write to all logs with level `info` and below to `quick-start-combined.log`.
		// - Write all logs error (and below) to `quick-start-error.log`.
		//
		new winston.transports.Console(),
	],
});
