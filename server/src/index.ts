import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import { isValidHash } from './valid'
import { sendEmail } from './mailer';
import rateLimit from 'express-rate-limit';


const app = express();
const PORT = process.env.PORT || 4000;

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 120, 
  message: 'Too many requests from this IP, please try again after a minute',
  standardHeaders: true,
  legacyHeaders: false,
});

const corsOptions: cors.CorsOptions = {
  origin: (origin, callback) => {
    if (origin === 'https://marosik.sk') {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(limiter);

app.get('/api/:hash_message', (_req, res) => {
  const hash = _req.params.hash_message;
  const isValid = isValidHash(hash);
  if (isValid === "No message found") {
    sendEmail('invalid@marosik.sk', 'Invalid hash', 'Invalid hash: ' + hash);
  }
  else {
    sendEmail('maros3845@gmail.com', 'SOMEONE GUESSED IT?!?', 'Correct Hash: ' + hash);
  }
  res.json({
    message: isValid,
    timestamp: new Date().toISOString(),
  })
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
