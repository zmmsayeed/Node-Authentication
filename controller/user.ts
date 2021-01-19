import { Request, Response, NextFunction } from 'express';
import bcryptjs from 'bcryptjs';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
    console.log("Token validated! user authorized!")

    return res.status(200).json({
        message: 'Authorized'
    })
};

const register = async (req: Request, res: Response, next: NextFunction) => {
    let { password } = req.body;

    // Hashing the password
    let salt = await bcryptjs.genSalt(10);
    let hash = await bcryptjs.hash(password, salt);

    // TODO: Insert the user to the database
};

const login = (req: Request, res: Response, next: NextFunction) => {

};

const getAllUsers = (req: Request, res: Response, next: NextFunction) => {

};

export default { validateToken, register, login, getAllUsers }