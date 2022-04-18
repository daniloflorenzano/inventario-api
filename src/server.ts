import { app } from './app';

const PORT = 3000;

const server = app.listen(PORT, () =>
	console.log(`App ouvindo na porta ${PORT}`)
);

// garante que o serviço na porta 3000 seja encerrado junto da aplicação
process.on('SIGINT', () => {
	server.close();
	console.log('App finalizado.');
});
