import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne,
} from "typeorm";

import { Area } from "./Area";

@Entity()
export class Edificio extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  planta: number;

  @ManyToOne(() => Area, (area) => area.edificio)
  area: Area[];

  @CreateDateColumn()
  fechaCreado: Date;

  @UpdateDateColumn()
  fechaActualizado: Date;
}
