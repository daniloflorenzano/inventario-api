import { Router } from 'express';
import { ItemController } from '../controller/ItemController';
import { Item } from '../entity/Item';

export const routerItem = Router();
const itemCtrl = new ItemController();

routerItem.get('/', async (req, res) => {
	const items = await itemCtrl.getItems();
	res.json(items);
});

routerItem.get('/:codigoItem', async (req, res) => {
	const codigo = parseInt(req.params.codigoItem);
	const item = await itemCtrl.getItemByCode(codigo);
	res.json(item);
});

routerItem.post('/', async (req, res) => {
	const { descricao, local, estado, codigo, observacao } = req.body;
	const item = new Item(descricao, local, estado, codigo, observacao);
	const createdItem = await itemCtrl.createItem(item);
	res.send(createdItem);
});

routerItem.put('/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	const item: {} = req.body;
	const updatedItem = await itemCtrl.updateItem(item, id);
	res.send(updatedItem);
});

routerItem.delete('/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	const deletedItem = await itemCtrl.deleteItem(id);
	res.send(deletedItem);
})
