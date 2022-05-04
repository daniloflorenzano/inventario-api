import { Router } from 'express';
import { UsuarioController } from '../controller/UsuarioController';

export const routerUsuario = Router();
const usuarioCtrl = new UsuarioController();

routerUsuario
	.get('/', usuarioCtrl.getUsers)
	.get('/:id', usuarioCtrl.getUserById)
	.post('/', usuarioCtrl.createUser)
	.put('/:id', usuarioCtrl.updateUser)
	.delete('/:id', usuarioCtrl.deleteUser);
