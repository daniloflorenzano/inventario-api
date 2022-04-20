import { Router } from 'express';
import { ItemController } from '../controller/ItemController';
import { Item } from '../entity/Item';

export const routerItem = Router();
const itemCtrl = new ItemController();

routerItem
	.get('/', async (req, res) => {
		const items = await itemCtrl.getItems();
		res.json(items);
	})
	.get('/:codigoItem', async (req, res) => {
		const codigo = parseInt(req.params.codigoItem);
		const item = await itemCtrl.getItemByCode(codigo);
		res.json(item);
	})
	.post('/', (req, res) => itemCtrl.createItem(req, res))
	.put('/:id', async (req, res) => {
		const id = req.params.id;
		const item: {} = req.body;
		const updatedItem = await itemCtrl.updateItem(item, id);
		res.send(updatedItem);
	})
	.delete('/:id', async (req, res) => {
		const id = req.params.id;
		const deletedItem = await itemCtrl.deleteItem(id);
		res.send(deletedItem);
	});
