import { Employee } from "../../employee/entities/employee.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ContactInfor {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: true })
    phone: string

    @Column()
    email: string

    @Column()
    employeeId: number

    @OneToOne(() => Employee, employee => employee.contactInfor)
    @JoinColumn()
    employee: Employee

}
