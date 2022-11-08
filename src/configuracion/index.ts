import { NextFunction,Request,Response } from "express";

export const puerto:number = 8080;

const administrador:boolean = true

export const autorizacion = (req:Request,res:Response,next:NextFunction): void =>{
    if (!administrador){
        res.status(401).json({
            msg:'No Autorizado'
        })
    }
    next();
}