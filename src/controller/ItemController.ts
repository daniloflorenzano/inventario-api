import { AppDataSource } from '../data-source';
import { Item } from '../entity/Item';

export class ItemController {
	async createItem(item: Item) {
		const createdItem = await AppDataSource.manager.save(item);
		return createdItem;
	}

	async getItems() {
		const items = await AppDataSource.manager.find(Item);
		return items;
	}

	async getItemByCode(codigo: number) {
		const item = await AppDataSource.manager.findOneBy(Item, {
			codigo: codigo,
		});
		return item;
	}

	async updateItem(data: {}, id: number) {
		await AppDataSource.manager.update(Item, id, data);
	}

	async deleteItem(id: number) {
		await AppDataSource.manager.delete(Item, { id: id });
	}
}
