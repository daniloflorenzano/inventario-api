import { ItemError } from '../errors/ItemError';
import { ItemRepository } from '../repository/Item';

interface IItem extends Array<IItem> {
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

		const createdItem = await ItemRepository.save(item);

		return createdItem;
	}
}
