import { Request, Response, NextFunction } from 'express';
import bcryptjs from 'bcryptjs';
import mongoose from 'mongoose';
import User from '../models/user';
import signJWT from '../functions/signJWT';

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
    const user = new User({
        email: req.body.email,
        password: hash
        
    });

    try {
        const savedUser = await user.save();
        res.status(201).send({ user });
    } catch(err) {
        res.status(400).send(err);
    }
};

const login = async (req: Request, res: Response, next: NextFunction) => {
    let { email, password } = req.body;
    
    // Check if the user with the given email exists
    const user = await User.findOne({ email });
    if(!user) return res.status(400).send("Email is not found!");

    // Check if password is correct
    const validPass = await bcryptjs.compare(password, user.password);
    if (!validPass) return res.status(400).send("Invalid Password!");

    // If logged in, create and assing a token to the user
    let token: string = await signJWT(user);
    if(token) {
        res.header('auth-token', token).send({
            message: "Authorized!",
            user,
            token
        })
    }

};

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    let allUsers = await User.find().select('-password').exec();
    return res.status(200).send({
        users: allUsers,
        count: allUsers.length
    }) 
};

export default { validateToken, register, login, getAllUsers }