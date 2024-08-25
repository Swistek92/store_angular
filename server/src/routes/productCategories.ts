import { Router, Request, Response } from 'express';
import createpool from '../db/db';
import queries from '../db/queries';
import { Category } from '../types/category.type';

const pool = createpool();
const router = Router();

const query = (sql: string): Promise<Category[]> => {
  return new Promise((resolve, reject) => {
    pool.query(sql, (error: any, results: Category[]) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
};

router.get('/', async (req: Request, res: Response) => {
  try {
    const categories = await query(queries.selectsall);
    res.status(200).send(categories);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
