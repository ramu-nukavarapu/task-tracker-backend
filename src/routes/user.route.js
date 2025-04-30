import express from 'express';
import { refreshAccessToken, userInfo, userLogin, userSignup } from '../controllers/user.controller.js';
import { tokenValidation, userValidation } from '../middlewares/auth.middleware.js';

export const userRouter = express.Router();


userRouter.post('/signup', userSignup);
userRouter.post('/login', userLogin);
userRouter.get("/me", userValidation, userInfo)
userRouter.get("/refresh", tokenValidation, refreshAccessToken)
