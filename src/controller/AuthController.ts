import { Request, Response } from 'express';
import { UsuarioRepository } from '../repository/usuario';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import 'dotenv/config'

export class AuthController {
	static async authenticate(req: Request, res: Response) {
		const { email, senha } = req.body;

		const user = await UsuarioRepository.findOneBy({ email });

		if (!user) {
			return res.sendStatus(401);
		}

		const isValidPassword = await bcrypt.compare(senha, user.senha);

		if (!isValidPassword) {
			return res.sendStatus(401);
		}

		const token = jwt.sign({ id: user.id }, process.env.SECRET, { expiresIn: '1d' });

		// nao mandar a senha para o front
		delete user.senha;

		return res.json({
			user,
			token,
		});
	}
}
