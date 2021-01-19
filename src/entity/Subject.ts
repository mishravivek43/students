import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne} from "typeorm";
import {Student} from "./Student"
import {Teacher} from "./Teacher"
@Entity()
export class Subject {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({
        length: 100,

    })
    name: string;
    @Column({
        length: 100,
        nullable:true
    })
    @Column({type:"text",
    nullable:true
    })
    description: string;
    @Column({
        type:Boolean,
        default:true
    })
    isActive: boolean;
    @ManyToOne(type => Teacher, teacher => teacher.subjects, {
        cascade: true,
    })
    teacher: Teacher;
    @ManyToMany(type => Student, student => student.subjects)
    students: Student[];
}
