import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Employee } from "./entities/employee.entity";
import { Repository } from 'typeorm'
import { CreateEmployeeDto } from "./dto/create-employee.dto";

@Injectable()
export class EmployeeService {

    constructor(@InjectRepository(Employee) private readonly employeeRepository: Repository<Employee>) { }

    async createEmployee(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {

        const employee = this.employeeRepository.create(createEmployeeDto)

        if (createEmployeeDto.managerId) {

            const manager = await this.employeeRepository.findOne({ where: { id: createEmployeeDto.managerId } })

            if (manager) {

                employee.manager = manager

            }

        }

        await this.employeeRepository.save(employee)

        return employee
    }


    findAll(): Promise<Employee[]> {

        return this.employeeRepository.find()

    }

    async findOne(employeeId: number): Promise<Employee> {

        return await this.employeeRepository.findOne(
            {
                where: { id: employeeId },

                relations:
                {
                    contactInfor: true,
                    tasks: true,
                    meetings: true
                }
            }
        )

    }

}