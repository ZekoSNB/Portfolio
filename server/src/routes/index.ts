import { Router } from 'express';

const router = Router();

router.get('/api', (req, res) => {
  res.send('Verify route');
});

export default router;