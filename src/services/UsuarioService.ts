import { UsuarioError } from '../errors/UsuarioError';
import { UsuarioRepository } from '../repository/usuario';

interface IUser {
	nome: string;
	sobrenome: string;
	email: string;
	senha: string;
	admin: boolean;
}

export class UsuarioService {
	async createUser(usuario: IUser) {
		const alreadyExists = await UsuarioRepository.findOneBy({
			nome: usuario.nome,
			sobrenome: usuario.sobrenome,
		});

		if (alreadyExists) return UsuarioError.userAlreadyExists();

		for (const [key, value] of Object.entries(usuario)) {
			if (value.length === 0) return UsuarioError.emptyField(key);
		}

		const createdUser = await UsuarioRepository.save(usuario);
		return createdUser;
	}

	async getUsers() {
		const users = await UsuarioRepository.find();
		return users;
	}

	async getUserById(id: string) {
		const user = await UsuarioRepository.findOneBy({ id: id });

		if (!user) return UsuarioError.userNotFound();

		return user;
	}

	async updateUser(id: string, data: {}) {
		return await UsuarioRepository.update(id, data);
	}

	async deleteUser(id: string) {
		return await UsuarioRepository.delete(id);
	}
}
