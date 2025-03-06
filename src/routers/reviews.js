import express from 'express';
import {
  addReview,
  getReviews,
  deleteReview,
  replyToReview,
  reportReview,
} from '../controllers/reviews/addReview.js';

import auth from '../middlewares/auth.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { reviewSchema } from '../validation/reviews/reviewsValidation.js';

const reviewRoutes = express.reviewRoutes();

reviewRoutes.get('/', ctrlWrapper(getReviews));
reviewRoutes.use(auth);
reviewRoutes.post('/', validateBody(reviewSchema), ctrlWrapper(addReview));
reviewRoutes.delete('/:id', ctrlWrapper(deleteReview));
reviewRoutes.patch('/:id/reply', ctrlWrapper(replyToReview));
reviewRoutes.post('/:id/report', ctrlWrapper(reportReview));

export default reviewRoutes;
