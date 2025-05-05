import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { isValidHash } from './valid'
import rateLimit from 'express-rate-limit';


dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 12, 
  message: 'Too many requests from this IP, please try again after a minute',
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(express.json());
app.use(cors());
app.use(limiter);

app.get('/api/:hash_message', (_req, res) => {
  const hash = _req.params.hash_message;
  const isValid = isValidHash(hash);
  res.json({
    message: isValid,
    timestamp: new Date().toISOString(),
  })
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
