import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as logger from 'morgan';

import { connectServerInDatabase } from './config/db';
import { routerItem } from './routes/item';
import { Request, Response, NextFunction } from 'express';
import { ItemError } from './errors/ItemError';
import { routerUsuario } from './routes/usuario';
import { UsuarioError } from './errors/UsuarioError';

export const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(logger('dev'));

connectServerInDatabase();

app.use('/item', routerItem);
app.use('/usuario', routerUsuario);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	if (err instanceof ItemError || err instanceof UsuarioError) {
		return res.status(err.code).json({ message: err.message });
	}
	res.status(500).json({ message: 'Internal Server Error' });
});
