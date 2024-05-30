import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity} from 'typeorm'

@Entity() //usar el decorador @Entity
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    correo_electronico: string

    @Column()
    contrasenia: string

    @Column({
        default: true //agregar valor por defecto true
    })
    activo: boolean

    @CreateDateColumn()
    fechaCreado: Date

    @UpdateDateColumn()
    fechaActualizado: Date

}