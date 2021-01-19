import {Entity, PrimaryGeneratedColumn, Column,ManyToOne} from "typeorm";
import {Subject} from "./Subject"
import {Teacher} from "./Teacher"
import {Student} from "./Student"
@Entity()
export class Attandance {
    @PrimaryGeneratedColumn()
    id: number;
    @Column('date')
    date: Date;
    @Column({
        length:50
    })
    date_string: string;
    @Column({
        length: 100,
        nullable:true
    })
    lastname: string;
    @ManyToOne(type => Subject)
    subjects: Subject;
    @ManyToOne(type => Student)
    student: Student;
    @ManyToOne(type => Teacher)
    teacher: Teacher;
}
