import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_SUPER_SECRET = process.env.JWT_SUPER_SECRET;

export const userValidation = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(400).json({message: "Token not found."})
        }
        jwt.verify(token, JWT_SECRET, (error, result) => {
            if (error) {
                return res.status(403).json({ message: error.message });
            }
            req.user = result;
            next();
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const tokenValidation = async (req, res, next) => {
    try {
        const refreshToken = req.headers.refreshToken;
        if(!refreshToken){
            return res.status(400).json({ message: "token not found" });
        }
        jwt.verify(refreshToken, JWT_SUPER_SECRET, (result, error) => {
            if (error) {
                return res.status(403).json({ message: error.message });
            }
            req.user = result;
            next();
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
