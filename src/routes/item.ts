import { Router } from 'express';
import { ItemController } from '../controller/ItemController';

export const routerItem = Router();
const itemCtrl = new ItemController();

routerItem
	.get('/', itemCtrl.getItems)
	.get('/:codigoItem', itemCtrl.getItemByCode)
	.post('/', itemCtrl.createItem)
	.put('/:id', itemCtrl.updateItem)
	.delete('/:id', itemCtrl.deleteItem);
