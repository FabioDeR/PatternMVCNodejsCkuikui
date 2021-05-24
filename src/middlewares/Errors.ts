import { NextFunction, Request, Response } from 'express';

class ErrorsMiddlewars{
    static notFound = (req:Request, res:Response, next : NextFunction) =>{
        const err = new Error();        
        err.message = 'Not Found';
        err.status = 404;
        next(err);
    }

}


const catchErrors = (fn : any) =>{
    return function(req:Request, res:Response, next :NextFunction){
        return(fn(req, res, next)).catch(next);
    };

};


export {ErrorsMiddlewars, catchErrors};