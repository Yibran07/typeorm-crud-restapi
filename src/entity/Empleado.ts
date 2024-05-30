import {Column, Entity, PrimaryGeneratedColumn, 
    CreateDateColumn, UpdateDateColumn, BaseEntity, 
    OneToOne, JoinColumn} from 'typeorm'
import { User } from './User'
import { Vale } from './Vale'

@Entity() //usar el decorador @Entity
export class Empleado extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    //@Column(() => User)
    @OneToOne(() => User)
    @JoinColumn()
    usuario: User

    @Column()
    nombre: string

    @Column()
    ap_paterno: string

    @Column()
    ap_materno: string
    
    @Column()
    telefono: string

    @OneToOne(() => Vale)
    @JoinColumn()
    vale: Vale

    @CreateDateColumn()
    fechaCreado: Date

    @UpdateDateColumn()
    fechaActualizado: Date

}