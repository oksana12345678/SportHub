import { Router } from 'express';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { isValidId } from '../middlewares/isValidId.js';
import { validateBody } from '../middlewares/validateBody.js';
import * as clubTrainer from '../controllers/filters/cards.js';

import {
  clubTrainerSchema,
  createTrainerClubSchema,
  updateClubTrainerSchema,
  deleteClubTrainerSchema,
} from '../validation/cards/trainerClub.js';

import auth from '../middlewares/auth.js';

const cardsRouter = Router();

// Отримати всі картки (з фільтрами)
cardsRouter.get('/', ctrlWrapper(clubTrainer.getCardsController));

// Отримати одну картку за ID
cardsRouter.get(
  '/:id',
  isValidId,
  validateBody(clubTrainerSchema),
  ctrlWrapper(clubTrainer.getCardByIdController),
);

cardsRouter.use(auth);

// Додати нову картку (авторизація потрібна)
cardsRouter.post(
  '/',
  validateBody(createTrainerClubSchema),
  ctrlWrapper(clubTrainer.createCardController),
);

// Оновити картку за ID (авторизація потрібна)
cardsRouter.patch(
  '/:id',
  isValidId,
  validateBody(updateClubTrainerSchema),
  ctrlWrapper(clubTrainer.updateCardController),
);

// Видалити картку за ID (авторизація потрібна)
cardsRouter.delete(
  '/:id',
  isValidId,
  validateBody(deleteClubTrainerSchema),
  ctrlWrapper(clubTrainer.deleteCardController),
);

export default cardsRouter;
