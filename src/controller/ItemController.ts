import { NextFunction, Request, Response } from 'express';
import { Item } from '../entity/Item';
import { ItemService } from '../services/ItemService';

const Service = new ItemService();

export class ItemController {
	async createItem(req: Request, res: Response, next: NextFunction) {
		const data: Item = req.body;
		const item = await Service.createItem(data, next);

		if (item !== void 0) {
			return res.status(201).json(item);
		}
	}

	async getItems(req: Request, res: Response) {
		const items = await Service.getItems();

		if (items !== void 0) {
			return res.status(200).json(items);
		}
	}

	async getItemByCode(req: Request, res: Response, next: NextFunction) {
		const codigo = parseInt(req.params.codigoItem);
		const item = await Service.getItemByCode(codigo, next);

		if (item !== void 0) {
			console.log('ta troll')
			return res.status(200).json(item);
		}
	}

	async updateItem(req: Request, res: Response) {
		const id = req.params.id;
		const data: {} = req.body;
		const updatedItem = await Service.updateItem(id, data);

		if (updatedItem !== void 0) {
			return res.status(200).json(updatedItem);
		}
	}

	async deleteItem(req: Request, res: Response) {
		const id = req.params.id;
		const deletedItem = Service.deleteItem(id);

		if (deletedItem !== void 0) {
			return res.status(204).json(deletedItem);
		}
	}
}
