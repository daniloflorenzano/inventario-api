import { Request, Response } from 'express';
import { Usuario } from '../entity/Usuario';
import { UsuarioService } from '../services/UsuarioService';
import { instanceToPlain } from 'class-transformer';
import { UsuarioError } from '../errors/UsuarioError';

const Service = new UsuarioService();

export class UsuarioController {
	async createUser(req: Request, res: Response) {
		const data: Usuario = req.body;
		const user = await Service.createUser(data);

		const userSend = instanceToPlain(user);

		if (user instanceof UsuarioError) {
			return res.status(user.code).json({ message: user.message });
		}

		return res.status(201).json(userSend);
	}

	async getUsers(req: Request, res: Response) {
		const users = await Service.getUsers();
		let code = 201;

		const userSend = instanceToPlain(users);

		res.status(code).json(userSend);
	}

	async getUserById(req: Request, res: Response) {
		const id = req.params.id;
		const user = await Service.getUserById(id);
		const userSend = instanceToPlain(user);

		if (user instanceof UsuarioError) {
			res.status(user.code).json({ message: user.message });
		}

		res.status(200).json(userSend);
	}

	async updateUser(req: Request, res: Response) {
		const id = req.params.id;
		const data: {} = req.body;
		const updatedUser = await Service.updateUser(id, data);

		return res.status(200).json(updatedUser);
	}

	async deleteUser(req: Request, res: Response) {
		const id = req.params.id;
		const deletedUser = await Service.deleteUser(id);

		return res.status(204).json(deletedUser);
	}
}
