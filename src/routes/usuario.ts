import { Router } from 'express';
import { UsuarioController } from '../controller/UsuarioController';

export const routerUsuario = Router();
const usuarioCtrl = new UsuarioController();

routerUsuario.post('/', (req, res) => {
	usuarioCtrl.createUser(req, res);
});
