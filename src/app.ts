import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as logger from 'morgan';

import { connectServerInDatabase } from './config/db';
import { routerItem } from './route/item';
import { Request, Response, NextFunction } from 'express';
import { routerUsuario } from './route/usuario';

import createHttpError = require('http-errors');
import { AuthController } from './controller/AuthController';

import { authMiddleware } from './middlewares/authMiddleware';

export const app = express();

// permitir o CORS na rede local
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use(cors());

app.use(bodyParser.json());

app.use(logger('dev'));

connectServerInDatabase();

app.use('/item', authMiddleware, routerItem);
app.use('/usuario', authMiddleware, routerUsuario);
app.use('/auth', AuthController.authenticate)

app.use(
	(
		err: createHttpError.HttpError,
		req: Request,
		res: Response,
		next: NextFunction
	) => {
		if (err instanceof createHttpError.HttpError) {
			return res.status(err.statusCode).json({ message: err.message });
		}
		res.status(500).json({ message: 'Internal Server Error' });
	}
);
