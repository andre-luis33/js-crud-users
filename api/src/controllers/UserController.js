import prisma from '../database/prisma.js';
import crypto from 'crypto';

class UserController {

	async index(req, res) {

		const users = await prisma.user.findMany();
		return res.json(users || []);

	}

	async store(req, res) {

		const { name, email, password } = req.body;

		if(!name || !email || !password) {
			return res.status(400).json({ message: 'Missing required fields' });
		}

		await prisma.user.create({
			data: {
				name, email, password, refreshTokenKey: crypto.randomBytes(20).toString('hex')
			}
		});

		return res.sendStatus(201);

	}

}

export default new UserController();