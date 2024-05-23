import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from "typeorm";

@Entity()
export class Vale extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  num_serie: number;

  @Column()
  unidad: number;

  @Column()
  modelo: string;

  @Column()
  marca: string;

  @CreateDateColumn()
  fechaCreado: Date;

  @UpdateDateColumn()
  fechaActualizado: Date;
}
