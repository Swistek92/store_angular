import { Router, Request, Response } from 'express';
import createpool from '../db/db';
import queries from '../db/queries';
import { Product } from '../types/products.type';
const pool = createpool();
const productsRouter = Router();

const query = (sql: string): Promise<Product[]> => {
  return new Promise((resolve, reject) => {
    pool.query(sql, (error: any, results: Product[]) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
};

productsRouter.get('/', async (req: Request, res: Response) => {
  try {
    const products = await query(queries.allProducts);
    console.log(products);
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

productsRouter.get('/:id', async (req: Request, res: Response) => {
  let id = req.params.id;
  try {
    const porduct = await query(queries.findAProductWithId + id);
    console.log(porduct);
    res.status(200).send(porduct);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default productsRouter;
