import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Area } from "./Area";

@Entity()
export class Edificio extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

    @Column()
    planta: string
    
    @Column()
    descripcion: string

    @CreateDateColumn()
    fechaCreado: Date

    @UpdateDateColumn()
    fechaActualizado: Date

    @OneToMany(() => Area, (area) => area.edificio )
    areas: Area[]
}