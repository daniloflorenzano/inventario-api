import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Usuario } from '../entity/Usuario';
import { UsuarioService } from '../services/UsuarioService';
import { instanceToPlain } from 'class-transformer';

const Service = new UsuarioService();

export class UsuarioController {
	async createUser(req: Request, res: Response) {
		const data: Usuario = req.body;
		const user = await Service.createUser(data);
		let code = 201;

		const userSend = instanceToPlain(user);

		res.status(code).json(userSend);
	}

	async getUsers(req: Request, res: Response) {
		const users = await Service.getUsers();
		let code = 201;

		const userSend = instanceToPlain(users);

		res.status(code).json(userSend);
	}

	async getUserById(req: Request, res: Response, id: string) {
		const user = await Service.getUserById(id);
		let code = 200;

		const userSend = instanceToPlain(user);

		res.status(code).json(userSend);
	}

	async deleteUser(id: string) {
		await AppDataSource.manager.delete(Usuario, {
			id: id,
		});
	}
}
