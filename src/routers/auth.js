import { Router } from 'express';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import auth from '../middlewares/auth.js';
import authRefresh from '../middlewares/authRefresh.js';

//controllers
import register from '../controllers/auth/register.js';
import login from '../controllers/auth/login.js';
import logout from '../controllers/auth/logout.js';
import refreshToken from '../controllers/auth/refreshToken.js';
import verifyEmail from '../controllers/auth/verifyEmail.js';
import sendCode from '../controllers/auth/sendCode.js';
import verifyCode from '../controllers/auth/verifyCode.js';
import deleteAccountUser from '../controllers/auth/deleteAccountUser.js';

// validation
import userRegisterSchema from '../validation/auth/register.js';
import userLoginSchema from '../validation/auth/login.js';
import sendCodeEmailSchema from '../validation/auth/sendCodeEmail.js';
import verifyCodeSchema from '../validation/auth/verifyCode.js';

const authRouter = Router();

authRouter.post('/signup', userRegisterSchema, ctrlWrapper(register));
authRouter.post('/signin', userLoginSchema, ctrlWrapper(login));
authRouter.post('/logout', auth, ctrlWrapper(logout));
authRouter.get('/refresh/current', authRefresh, ctrlWrapper(refreshToken));
authRouter.get('/verify/:verificationToken', ctrlWrapper(verifyEmail));
authRouter.post('/send/verify', sendCodeEmailSchema, ctrlWrapper(sendCode));
authRouter.post('/verify', verifyCodeSchema, ctrlWrapper(verifyCode));
authRouter.delete('/delete/account', auth, ctrlWrapper(deleteAccountUser));

export default authRouter;
