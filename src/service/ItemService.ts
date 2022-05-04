import { NextFunction } from 'express';
import { NotFound, BadRequest } from 'http-errors';
import { ItemRepository } from '../repository/Item';

interface IItem {
	descricao: string;
	local: string;
	estado: string;
	codigo: number;
	observacao: string;
}

export class ItemService {
	async createItem(item: IItem, next: NextFunction) {
		const alreadyExists = await ItemRepository.findOneBy({
			codigo: item.codigo,
		});
		if (alreadyExists)
			return next(new BadRequest('Item com codigo ja cadastrado'));

		for (const [key, value] of Object.entries(item)) {
			const field = key.toUpperCase();
			if (key !== 'observacao' && value.length === 0) {
				return next(
					new BadRequest(`O campo ${field} nao pode estar em branco.`)
				);
			}
		}
		return ItemRepository.save(item);
	}

	async getItems() {
		return await ItemRepository.find();
	}

	async getItemByCode(codigo: number, next: NextFunction) {
		const item = await ItemRepository.findOneBy({
			codigo: codigo,
		});

		if (!item) return next(new NotFound('Item nao encontrado.'));

		return item;
	}

	async updateItem(id: string, data: {}) {
		return await ItemRepository.update(id, data);
	}

	async deleteItem(id: string) {
		return await ItemRepository.delete({ id: id });
	}
}
