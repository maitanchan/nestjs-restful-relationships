import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMeetingDto } from './dto/create-meeting.dto';
import { UpdateMeetingDto } from './dto/update-meeting.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Meeting } from './entities/meeting.entity';
import { Repository } from 'typeorm';
import { Employee } from '../employee/entities/employee.entity';

@Injectable()
export class MeetingService {

  constructor(
    @InjectRepository(Meeting) private readonly meetingRepository: Repository<Meeting>,
    @InjectRepository(Employee) private readonly employeeRepository: Repository<Employee>
  ) { }

  async create(createMeetingDto: CreateMeetingDto) {

    const employee = await this.employeeRepository.findOne({ where: { id: createMeetingDto.employeeId } })

    if (!employee) {

      throw new NotFoundException("Employee Not Found")

    }

    const meeting = this.meetingRepository.create({ ...createMeetingDto })

    meeting.attendees = [employee]

    await this.meetingRepository.save(meeting)

    return meeting

  }

  findAll() {
    return `This action returns all meeting`;
  }

  findOne(id: number) {
    return `This action returns a #${id} meeting`;
  }

  update(id: number, updateMeetingDto: UpdateMeetingDto) {
    return `This action updates a #${id} meeting`;
  }

  remove(id: number) {
    return `This action removes a #${id} meeting`;
  }
}
