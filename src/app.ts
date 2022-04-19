import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as logger from 'morgan';

import { connectServerInDatabase } from './config/db';
import { routerItem } from './routes/item';
import { itemErrorHandler } from './errors/ItemErrorHandler';

export const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(logger('dev'));

connectServerInDatabase();

app.use('/item', routerItem);

app.use(itemErrorHandler);
