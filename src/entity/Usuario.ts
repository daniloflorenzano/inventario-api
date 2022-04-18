import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Usuario {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	nome: string;

	@Column()
	sobrenome: string;

	@Column()
	cargo: string;

	@Column()
	email: string;
}
