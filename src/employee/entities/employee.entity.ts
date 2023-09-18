import { Task } from '../../task/entities/task.entity'
import { ContactInfor } from '../../contact-infor/entities/contact-infor.entity'
import { Meeting } from '../../meeting/entities/meeting.entity'
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Employee {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @ManyToOne(() => Employee, employee => employee.directReports, { onDelete: 'SET NULL' })
    manager: Employee

    @OneToMany(() => Employee, employee => employee.manager)
    directReports: Employee[]

    @OneToOne(() => ContactInfor, contactInfor => contactInfor.employee, { onDelete: 'CASCADE' })
    contactInfor: ContactInfor

    @OneToMany(() => Task, task => task.employee)
    tasks: Task[]

    @ManyToMany(() => Meeting, meeting => meeting.attendees)
    @JoinTable()
    meetings: Meeting[]

}