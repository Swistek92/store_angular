import { Router, Request, Response } from 'express';
import QueryBuilder from '../db/querys';
import queryExecutor from '../db/queryExecutor';
const productsRouter = Router();
const queryBuilder = new QueryBuilder();

productsRouter.get('/', async (req: Request, res: Response) => {
  let mainCategoryId = req.query.maincategoryid as string;
  let subCategoryId = req.query.subcategoryid as string;
  let keyword = req.query.keyword as string;

  try {
    let query: string;

    if (mainCategoryId) {
      query = queryBuilder.findProductsByMainCategoryId(Number(mainCategoryId));
    } else if (subCategoryId) {
      query = queryBuilder.findProductsBySubCategoryId(Number(subCategoryId));
    } else {
      query = queryBuilder.getAllProducts();
    }
    console.log(keyword);
    if (keyword) {
      query = queryBuilder.addKeywordFilter(query, keyword);
    }

    const products = await queryExecutor(query);
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

productsRouter.get('/:id', async (req: Request, res: Response) => {
  let id = req.params.id;
  try {
    const porduct = await queryExecutor(
      queryBuilder.findProductById(Number(id))
    );
    console.log(porduct);
    res.status(200).send(porduct);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default productsRouter;
