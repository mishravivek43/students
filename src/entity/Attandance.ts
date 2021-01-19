import {Entity, PrimaryGeneratedColumn, Column,ManyToOne} from "typeorm";
import {Subject} from "./Subject"
import {Teacher} from "./Teacher"
import {Student} from "./Student"
@Entity()
export class Attandance {
    @PrimaryGeneratedColumn()
    id: number;
    @Column('timestamp', { nullable: false, default: () => 'CURRENT_TIMESTAMP' })
    created: Date;
    @ManyToOne(type => Subject)
    subjects: Subject;
    @ManyToOne(type => Student)
    student: Student;
    @ManyToOne(type => Teacher)
    teacher: Teacher;
}
