import { Entity, Column, PrimaryColumn, Generated, CreateDateColumn } from 'typeorm';

@Entity()
export class Item {
	@PrimaryColumn()
	@Generated('uuid')
	readonly id!: string;

	@Column()
	descricao!: string;

	@Column()
	local!: string;

	@Column()
	estado!: string;

	@Column()
	codigo!: number;

	@Column()
	observacao: string;

	@CreateDateColumn()
	criadoEm: string;
}
