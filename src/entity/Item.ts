import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Item {
	constructor(
		descricao: string,
		local: string,
		estado: string,
		codigo: number,
		observacao: string
	) {
		this.descricao = descricao;
		this.local = local;
		this.estado = estado;
		this.codigo = codigo;
		this.observacao = observacao;
	}

	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	descricao: string;

	@Column()
	local: string;

	@Column()
	estado: string;

	@Column()
	codigo: number;

	@Column()
	observacao: string;
}
