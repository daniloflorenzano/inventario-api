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
				return ItemError.emptyField(key.toUpperCase());
			}
		}

		const createdItem = await ItemRepository.save(item);

		return createdItem;
	}
}
