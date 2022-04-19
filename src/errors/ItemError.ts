export class ItemError {
	code: number;
	message: string;

	constructor(message: string, code: number) {
		this.message = message;
		this.code = code;
	}

	static codeAlreadyExists() {
		return new ItemError('Código já registrado.', 400);
	}

	static emptyField(field) {
		return new ItemError(`O campo ${field} não pode estar vazio.`, 400);
	}
}
