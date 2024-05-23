import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  OneToOne,
  JoinColumn,
} from "typeorm";

import { User } from "./User";
import { Vale } from "./Vale";

@Entity()
export class Empleado extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  ap_paterno: string;

  @Column()
  ap_materno: string;

  @Column()
  telefono: string;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @OneToOne(() => Vale)
  @JoinColumn()
  vale: Vale;

  @CreateDateColumn()
  fechaCreado: Date;

  @UpdateDateColumn()
  fechaActualizado: Date;
}
