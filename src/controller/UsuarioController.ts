import { NextFunction, Request, Response } from 'express';
import { Usuario } from '../entity/Usuario';
import { UsuarioService } from '../service/UsuarioService';
import { instanceToPlain } from 'class-transformer';

const Service = new UsuarioService();

export class UsuarioController {
	async createUser(req: Request, res: Response, next: NextFunction) {
		const data: Usuario = req.body;
		const user = await Service.createUser(data, next);
		const userSend = instanceToPlain(user);

		// se for lancado um erro em alguma validacao, "user" se torna void
		if (user !== void 0) {
			return res.status(201).json(userSend);
		}
	}

	async getUsers(req: Request, res: Response) {
		const users = await Service.getUsers();
		const userSend = instanceToPlain(users);

		if (users !== void 0) {
			res.status(200).json(userSend);
		}
	}

	async getUserById(req: Request, res: Response, next: NextFunction) {
		const id = req.params.id;
		const user = await Service.getUserById(id, next);
		const userSend = instanceToPlain(user);

		if (user !== void 0) {
			res.status(200).json(userSend);
		}
	}

	async updateUser(req: Request, res: Response, next: NextFunction) {
		const id = req.params.id;
		const data = req.body;
		const updatedUser = await Service.updateUser(id, data, next);

		if (updatedUser !== void 0) {
			return res.status(200).json(updatedUser);
		}
	}

	async deleteUser(req: Request, res: Response, next: NextFunction) {
		const id = req.params.id;
		const deletedUser = await Service.deleteUser(id, next);

		if (deletedUser !== void 0) {
			return res.status(204).json(deletedUser);
		}
	}
}
