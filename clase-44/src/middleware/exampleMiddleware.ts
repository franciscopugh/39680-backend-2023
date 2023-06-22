import { NestMiddleware } from "@nestjs/common"; //Interfaz
import { Request, Response, NextFunction } from "express";
//import { Request, Response, Next } from "@nestjs/common"; //Decorators si quiero implementar NestJs

export default class ExampleMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log(`${req.method} - ${req.url}`)
        next()
    }

}