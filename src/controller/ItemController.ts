import { Request, Response } from 'express';
import { ItemError } from '../errors/ItemError';
import { ItemRepository } from '../repository/Item';
import { ItemService } from '../services/ItemService';

const Service = new ItemService();

interface IItem extends Array<IItem> {
	descricao: string;
	local: string;
	estado: string;
	codigo: number;
	observacao: string;
}

export class ItemController {
	async createItem(req: Request, res: Response) {
		const data: IItem = req.body;
		const item = await Service.createItem(data);

		if (item instanceof ItemError) {
			res.status(item.code).json(item.message);
		}

		res.status(201).json(item);
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

	async updateItem(data: {}, id: number) {
		await ItemRepository.update(id, data);
	}

	async deleteItem(id: number) {
		await ItemRepository.delete({ id: id });
	}
}
