import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Vale extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    num_serie: string

    @Column()
    unidad: string //pieza

    @Column()
    modelo: string

    @Column()
    marca: string

    @CreateDateColumn()
    fechaCreado: Date

    @UpdateDateColumn()
    fechaActualizado: Date
}