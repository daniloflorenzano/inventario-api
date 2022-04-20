import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Usuario } from '../entity/Usuario';
import { UsuarioService } from '../services/UsuarioService';

const Service = new UsuarioService();

export class UsuarioController {
	async createUser(req: Request, res: Response) {
		const data: Usuario = req.body;
		const usuario = await Service.createUser(data);
		let code = 201;

		res.status(code).json(usuario)
	}

	async getUsers() {
		const users = await AppDataSource.manager.find(Usuario);
		return users;
	}

	async getUserById(id: string) {
		const user = await AppDataSource.manager.findOneBy(Usuario, {
			id: id,
		});
		return user;
	}

	async deleteUser(id: string) {
		await AppDataSource.manager.delete(Usuario, {
			id: id,
		});
	}
}
