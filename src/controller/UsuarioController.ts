import { AppDataSource } from '../data-source';
import { Usuario } from '../entity/Usuario';

export class UsuarioController {
	async createUser(user: Usuario) {
		const createdUser = await AppDataSource.manager.save(user);
		return createdUser;
	}

	async getUsers() {
		const users = await AppDataSource.manager.find(Usuario);
		return users;
	}

	async getUserById(id: number) {
		const user = await AppDataSource.manager.findOneBy(Usuario, {
			id: id,
		});
		return user;
	}

	async deleteUser(id: number) {
		await AppDataSource.manager.delete(Usuario, {
			id: id,
		});
	}
}
