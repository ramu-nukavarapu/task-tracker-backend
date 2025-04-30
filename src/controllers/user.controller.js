import bcrypt from 'bcryptjs';
import { User } from '../models/user.model.js';
import { generateRefreshToken, generateToken } from '../utils/token.util.js';

export const userSignup = async (req, res) => {
    try {
        const { email, password, name, country } = req.body;

        const hashedPwd = await bcrypt.hash(password, 10);

        if (await User.findOne({ email })) {
            return res.status(409).json({ message: 'User already exists.' });
        }

        const user = await User.create({
            email,
            password: hashedPwd,
            name,
            country,
        });

        if (!user) {
            return res
                .status(500)
                .json({ message: 'something went wrong, try again.' });
        }

        res.status(200).json({ message: 'user signup successful.' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        const isValid = await bcrypt.compare(password, user.password);

        if (!isValid) {
            return res
                .status(404)
                .json({ message: 'username or password is incorrect.' });
        }

        const token = generateToken(user);
        const refreshToken = generateRefreshToken(user);

        res.status(200).json({
            user,
            token,
            refreshToken,
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const userInfo = async (req, res) => {
    try {
        const user = req.user;
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const refreshAccessToken = async (req, res) => {
    try {
        const token = generateToken(req.user);
        if (!token) {
            return res
                .status(500)
                .json({ message: 'something went wrong, try again.' });
        }
        res.status(200).json({ token });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
