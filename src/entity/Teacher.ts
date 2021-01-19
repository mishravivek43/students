import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany} from "typeorm";
import {Subject} from "./Subject"
@Entity()
export class Teacher {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({
        length: 100
    })
    firstname: string;
    @Column({
        length: 100,
        nullable:true
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
    @OneToMany(type => Subject, subject => subject.teacher)
    subjects: Subject[];
    @Column({type:"text",
    nullable:true
    })
    description: string;

    @Column({
        type:Boolean,
        default:true
    })
    isActive: boolean;
}
