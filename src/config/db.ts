import { AppDataSource } from '../data-source';

export const connectServerInDatabase = async () => {
	await AppDataSource.initialize().then(() => {
		console.log(`App conectado ao BD ${AppDataSource.options.database}`);
	});

	process.on('SIGINT', async () => {
		await AppDataSource.destroy().then(() =>
			console.log('Conexão com BD fechada.')
		);
	});
};
