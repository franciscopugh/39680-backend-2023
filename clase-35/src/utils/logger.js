import winston from "winston";

const customLevelOpt = {
    levels: {
        fatal: 0,
        error: 1,
        warning: 2,
        info: 3,
        debug: 4
    },
    colors: {
        fatal: 'red',
        error: 'orange',
        warning: 'yellow',
        info: 'blue',
        debug: 'cyan'
    }
}

const logger = winston.createLogger({
    levels: customLevelOpt.levels, //Implementar mi propio obj de config
    transports: [
        new winston.transports.Console({
            level: 'info',
            format: winston.format.combine(
                winston.format.colorize({ color: customLevelOpt.colors }), //Color correspondiente segun el tipo de logger   
                winston.format.simple()
            )

        }),
        new winston.transports.File({
            filename: './errors.log',
            level: 'warning',
            format: winston.format.simple()
        })
    ]
})



export const addLogger = (req, res, next) => {
    req.logger = logger
    req.logger.info(`${req.method} es ${req.url} - ${new Date().toLocaleTimeString()}`)
    next()
}