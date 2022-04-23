import { ItemError } from '../errors/ItemError';
import { ItemRepository } from '../repository/Item';

interface IItem {
	descricao: string;
	local: string;
	estado: string;
	codigo: number;
	observacao: string;
}

export class ItemService {
	async createItem(item: IItem) {
		const alreadyExists = await ItemRepository.findOneBy({
			codigo: item.codigo,
		});
		if (alreadyExists) return ItemError.codeAlreadyExists();

		for (const [key, value] of Object.entries(item)) {
			if (key !== 'observacao' && value.length === 0) {
				return ItemError.emptyField(key);
			}
		}

		return await ItemRepository.save(item);
	}

	async getItems() {
		return await ItemRepository.find();
	}

	async getItemByCode(codigo: number) {
		const item = await ItemRepository.findOneBy({
			codigo: codigo,
		});

		if (!item) return ItemError.ItemNotFound(codigo);

		return item;
	}

	async updateItem(id: string, data: {}) {
		return await ItemRepository.update(id, data);
	}

	async deleteItem(id: string) {
		return await ItemRepository.delete({ id: id });
	}
}
