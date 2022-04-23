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

	static emptyField(field: string) {
		return new ItemError(
			`O campo ${field.toUpperCase()} não pode estar vazio.`,
			400
		);
	}

	static ItemNotFound(itemCode: number) {
		return new ItemError(`Item ${itemCode} nao encontrado.`, 404);
	}
}
