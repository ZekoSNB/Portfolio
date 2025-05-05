import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { isValidHash } from './valid'

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;
console.log(process.env.PORT);

app.use(express.json());
app.use(cors());
app.get('/api/:hash_message', (_req, res) => {
  const hash = _req.params.hash_message;
  const isValid = isValidHash(hash);
  res.json({
    message: isValid,
    timestamp: new Date().toISOString(),
  })
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
