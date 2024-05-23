import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  ap_paterno: string;

  @Column()
  ap_materno: string;

  @Column()
  contraseña: string;

  @Column()
  correo_electronico: string;

  @Column({
    default: true,
  })
  activo: boolean;

  @CreateDateColumn()
  fechaCreado: Date;

  @UpdateDateColumn()
  fechaActualizado: Date;
}
