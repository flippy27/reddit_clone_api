import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity ()
export class image_type {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
}