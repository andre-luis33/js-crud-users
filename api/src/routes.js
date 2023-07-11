import { Router } from 'express';

import UserController from './controllers/UserController.js';

const router = Router();

router.get('/', (req, res) => {
	return res.json({ message: 'Welcome to the API' });
});

router.get('/users', UserController.index);
router.post('/users', UserController.store);

export default router;
