import { Router } from 'express';
import profileRouter from './userProfileRoute.js';
import authRouter from './auth.js';
import reviewRoutes from './reviews.js';
import cardsRouter from './cardsRoutes.js';

const router = Router();

router.use('/profile', profileRouter);
router.use('/auth', authRouter);
router.use('/reviews', reviewRoutes);
router.use('/cards', cardsRouter);



export default router;
