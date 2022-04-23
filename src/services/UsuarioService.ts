import { validate } from 'uuid';
import { UsuarioRepository } from '../repository/usuario';
import { NotFound, BadRequest } from 'http-errors';
import { NextFunction } from 'express';

interface IUser {
	nome: string;
	sobrenome: string;
	email: string;
	senha: string;
	admin: boolean;
}

export class UsuarioService {
	async createUser(usuario: IUser, next: NextFunction) {
		const alreadyExists = await UsuarioRepository.findOneBy({
			nome: usuario.nome,
			sobrenome: usuario.sobrenome,
		});

		if (alreadyExists) return next(new BadRequest('Usuario ja cadastrado.'));

		for (const [key, value] of Object.entries(usuario)) {
			const field = key.toUpperCase();
			if (value.length === 0)
				return next(
					new BadRequest(`O campo ${field} nao pode estar vazio.`)
				);
		}

		return UsuarioRepository.save(usuario);
	}

	async getUsers() {
		return await UsuarioRepository.find();
	}

	async getUserById(id: string, next: NextFunction) {
		if (!validate(id)) return next(new NotFound('ID invalido'));

		const user = await UsuarioRepository.findOneBy({ id: id });

		if (!user) return next(new NotFound('Usuario nao encontrado.'));

		return user;
	}

	async updateUser(id: string, data: {}, next: NextFunction) {
		if (!validate(id)) return next(new NotFound('ID invalido'));

		return await UsuarioRepository.update(id, data);
	}

	async deleteUser(id: string, next: NextFunction) {
		if (!validate(id)) return next(new NotFound('ID invalido'));

		return await UsuarioRepository.delete(id);
	}
}
