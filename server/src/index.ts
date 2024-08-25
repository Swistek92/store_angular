import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import router from './routes';
const app = express();
const port = process.env.PORT || 3000;

// Use CORS middleware
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// Route handlers
app.use('/', router);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
