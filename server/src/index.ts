import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import router from './routes';
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
