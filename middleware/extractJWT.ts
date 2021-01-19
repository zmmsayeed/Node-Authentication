import { Request, Response, NextFunction } from'express';
import jwt from 'jsonwebtoken';

const extractJWT = (req: Request, res: Response, next: NextFunction) =>  {
    console.log("Validating token");

    let token = req.header('auth-token');
    if(!token) return res.status(401).send("Access Denied!");

    try {
        const verified = jwt.verify(token, 'abcdefghijklmnopqrstuvwxyz');
        req.body.token = verified;
        // req.token = verified;
    } catch(err) {
        return res.status(400).send("Token not verified")
    }
}