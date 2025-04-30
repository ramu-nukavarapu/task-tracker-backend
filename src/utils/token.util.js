import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_SUPER_SECRET = process.env.JWT_SUPER_SECRET;

export const generateToken = (user) => {
    return jwt.sign(
        {
            id: user._id,
            email: user.email,
            name: user.name,
        },
        JWT_SECRET,
        {
            expiresIn: '1h',
        }
    );
};

export const generateRefreshToken = (user) => {
    return jwt.sign(
        {
            id: user._id,
            email: user.email,
            name: user.name,
        },
        JWT_SUPER_SECRET,
        {
            expiresIn: '7d',
        }
    );
};
