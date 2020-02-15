import { createLogger, format, transports } from 'winston';

const { combine, timestamp, prettyPrint, printf, label } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const options = {
  file: {
    level: 'info',
    filename: `logs/info.log`,
    handleExceptions: true,
    json: false,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
    format: combine(label({ label: 'express' }), timestamp(), myFormat),
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
    format: combine(label({ label: 'express' }), timestamp(), myFormat),
  },
};

const logger = createLogger({
  level: 'info',
  format: combine(format.json(), timestamp(), prettyPrint()),
  transports: [new transports.File(options.file)],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console(options.console));
}
export default logger;
