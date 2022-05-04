import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Usuario } from './entity/Usuario';
import { Item } from './entity/Item';

export const AppDataSource = new DataSource({
	type: 'postgres',
	host: 'db',
	port: 5432,
	username: 'postgres',
	password: 'postgres',
	database: 'inventario',
	synchronize: true,
	logging: false,
	entities: [Usuario, Item],
	migrations: [],
	subscribers: [],
});
