import jwt from 'jsonwebtoken';
import IUser from '../interfaces/user';

const signJWT = (user: IUser, callback: (error: Error | null , token: string | null ) => void): void => {
    console.log(`Attempting to sign token for the use: ${user.email}`);

    try {
        jwt.sign({ email: user.email }, 'abcdefghijklmnopqrstuvwxyz', (err, token)=> {
            if (err) callback(err, null);
            else callback(null, token);
        })
    } catch(err) {
        console.log("Signing error: ", err.message, err)
        callback(err, null);
    }
    
}

export default signJWT;