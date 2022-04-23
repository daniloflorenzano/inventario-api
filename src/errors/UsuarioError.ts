export class UsuarioError {
	code: number;
	message: string;

	constructor(message: string, code: number) {
		this.message = message;
		this.code = code;
	}

	static userAlreadyExists() {
		return new UsuarioError('Usuario ja cadastrado', 400);
	}

	static userNotFound() {
		return new UsuarioError('Usuario nao encontrado', 404);
	}

	static emptyField(field: string) {
		return new UsuarioError(
			`O campo ${field.toUpperCase()} não pode estar vazio.`,
			400
		);
	}
}
