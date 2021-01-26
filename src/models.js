import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Note {
  @PrimaryGeneratedColumn()
  id = undefined;

  @Column("text")
  text = "";
}
