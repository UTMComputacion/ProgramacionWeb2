import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
export const validarToken = (req: Request, res: Response, next: NextFunction) => {
    dotenv.config();
    console.log(process.env.TOKEN_SECRET);
    
    const bearerHeader = req.headers['authorization'];
    console.log("***",bearerHeader);
    
    if (typeof bearerHeader !== 'undefined') {
        const bearerToken = bearerHeader.split(" ")[1];
        jwt.verify(bearerToken, process.env.TOKEN_SECRET || 'prueba', async (error, authData: any) => {
            if (error)
                res.sendStatus(403);
            else
                next();
        });
    }
    else
        res.sendStatus(403);
}