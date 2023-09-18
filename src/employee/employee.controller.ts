import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { EmployeeService } from "./employee.service";
import { CreateEmployeeDto } from "./dto/create-employee.dto";

@Controller('employee')
export class EmployeeController {

    constructor(private readonly employeeService: EmployeeService) { }

    @Post()
    createEmployee(@Body() createEmployeeDto: CreateEmployeeDto) {

        return this.employeeService.createEmployee(createEmployeeDto)

    }

    @Get()
    findAll() {

        return this.employeeService.findAll()

    }

    @Get(':id')
    findOne(@Param('id') employeeId: number) {

        return this.employeeService.findOne(employeeId)

    }

}