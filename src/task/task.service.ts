import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
import { Employee } from '../employee/entities/employee.entity';

@Injectable()
export class TaskService {

  constructor(
    @InjectRepository(Task) private readonly taskRepository: Repository<Task>,
    @InjectRepository(Employee) private readonly employeeRepository: Repository<Employee>
  ) { }

  async create(createTaskDto: CreateTaskDto) {

    const employee = await this.employeeRepository.findOne({ where: { id: createTaskDto.employeeId } })

    if (!employee) {

      throw new Error("Employee not found")

    }

    const task = this.taskRepository.create({ ...createTaskDto, employee })

    await this.taskRepository.save(task)

    return task
  }

  findAll() {
    return `This action returns all task`;
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
