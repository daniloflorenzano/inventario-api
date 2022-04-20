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
		const createdUser = await UsuarioRepository.save(usuario);

		return createdUser;
	}
}
