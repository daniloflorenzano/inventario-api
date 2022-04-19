import { AppDataSource } from '../data-source';
import { Item } from '../entity/Item';

export const ItemRepository = AppDataSource.getRepository(Item);


