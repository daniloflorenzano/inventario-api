import { Request, Response } from 'express';
import { Item } from '../entity/Item';
import { ItemError } from '../errors/ItemError';
import { ItemRepository } from '../repository/Item';
import { ItemService } from '../services/ItemService';

const Service = new ItemService();

export class ItemController {
	async createItem(req: Request, res: Response) {
		const data: Item = req.body;
		const item = await Service.createItem(data);
		let code = 201

		item instanceof ItemError ? code = item.code : null;

		res.status(code).json(item);
	}

	async getItems() {
		const items = await ItemRepository.find();
		return items;
	}

	async getItemByCode(codigo: number) {
		const item = await ItemRepository.findOneBy({
			codigo: codigo,
		});
		return item;
	}

	async updateItem(data: {}, id: string) {
		await ItemRepository.update(id, data);
	}

	async deleteItem(id: string) {
		await ItemRepository.delete({ id: id });
	}
}
