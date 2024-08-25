import express from 'express';
import dataRouter from './routes/data';
import procutsRouter from './routes/productCategories';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/', dataRouter);
app.use('/productCategories', procutsRouter);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
