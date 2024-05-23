import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne,
} from "typeorm";

import { Edificio } from "./Edificio";

@Entity()
export class Area extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @ManyToOne(() => Edificio, (edificio) => edificio.id)
  edificio: Edificio;

  @CreateDateColumn()
  fechaCreado: Date;

  @UpdateDateColumn()
  fechaActualizado: Date;
}
