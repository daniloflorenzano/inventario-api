import {
	Entity,
	Column,
	Generated,
	PrimaryColumn,
	CreateDateColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
export class Usuario {
	@PrimaryColumn()
	@Generated('uuid')
	readonly id!: string;

	@Column()
	nome!: string;

	@Column()
	sobrenome!: string;

	@Column()
	email!: string;

	@Exclude()
	@Column()
	senha!: string;

	@Column()
	admin!: boolean;

	@CreateDateColumn()
	criadoEm: string;
}
