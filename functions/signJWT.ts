import jwt from 'jsonwebtoken';
import IUser from '../interfaces/user';

const signJWT = async (user: IUser) => {
    console.log(`Attempting to sign token for the user: ${user.email}`);

    try {
        let token = jwt.sign({ email: user.email }, process.env.TOKEN_SECRET!);
        return token;
    } catch(err) {
        console.log("Signing error: ", err.message, err)
        return err
    }
}

export default signJWT;