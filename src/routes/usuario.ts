import { Router } from 'express';
import { UsuarioController } from '../controller/UsuarioController';

export const routerUsuario = Router();
const usuarioCtrl = new UsuarioController();

routerUsuario
	.post('/', async (req, res) => {
		usuarioCtrl.createUser(req, res);
	})
	.get('/', async (req, res) => {
		usuarioCtrl.getUsers(req, res);
	})
	.get('/:id', async (req, res) => {
		const id = req.params.id;
		return usuarioCtrl.getUserById(req, res, id);
	});
