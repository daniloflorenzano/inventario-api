import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as logger from 'morgan';

import { connectServerInDatabase } from './config/db';
import { routerItem } from './routes/item';
import { Request, Response } from 'express';
import { ItemError } from './errors/ItemError';

export const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(logger('dev'));

connectServerInDatabase();

app.use('/item', routerItem);

app.use((err: Error, req: Request, res: Response) => {
    if (err instanceof ItemError) {
        console.log('entrou no erro')
        return res.status(err.code).json({message: err.message});
    }
    res.status(500).json({message: 'Internal Server Error'});
});
