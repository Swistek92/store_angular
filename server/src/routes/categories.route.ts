import { Router, Request, Response } from 'express';
import { Category } from '../types/category.type';
import Querys from '../db/querys';
import queryExecutor from '../db/queryExecutor';
const categoriesRouter = Router();
const querys = new Querys();

categoriesRouter.get('/', async (req: Request, res: Response) => {
  try {
    const categories = await queryExecutor<Category[]>(
      querys.getAllCategories()
    );
    res.status(200).send(categories);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default categoriesRouter;
