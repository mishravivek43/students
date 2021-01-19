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
        length: 50
    })
    grade: string;
    @Column({
        length:40,
        unique:true
    })
    username: string;
    @Column({
        length:40,
    })
    password: string;
    @Column({
        length: 50
    })
    division: string;
    @Column("text")
    description: string;
    @Column("double")
    seat_number: number;
    @Column("date")
    dob: Date;
    @Column()
    isActive: boolean;
    @ManyToMany(type => Subject, subject => subject.students)
    @JoinTable()
    subjects: Subject[];
}
