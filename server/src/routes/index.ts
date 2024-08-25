import { Router } from 'express';
import categoriesRouter from './categories.route';
import productsRouter from './products.route';

const router = Router();

router.use('/categories', categoriesRouter);
router.use('/products', productsRouter);

export default router;
