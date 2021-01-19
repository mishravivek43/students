import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
import {Subject} from "./Subject"
@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({
        length: 100
    })
    firstname: string;
    @Column({
        length: 100
    })
    lastname: string;
    @Column({
        length:40,
        unique:true
    })
    username: string;
    @Column({
        length:40,
    })
    password: string;
    @Column({type:"text",
    nullable:true
    })
    description: string;

    @Column({
        type:Boolean,
        default:true
    })
    isActive: boolean;
    @ManyToMany(type => Subject, subject => subject.students)
    @JoinTable()
    subjects: Subject[];
}
