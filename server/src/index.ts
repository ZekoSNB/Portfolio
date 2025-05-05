import express from 'express';
import routes from './routes/index';


const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.get('/', routes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
