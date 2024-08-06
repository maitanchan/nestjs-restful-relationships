import { Module } from '@nestjs/common';
import { MeetingService } from './meeting.service';
import { MeetingController } from './meeting.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Meeting } from './entities/meeting.entity';
import { Employee } from '../employee/entities/employee.entity';

@Module({

  imports: TypeOrmModule.forFeature([Meeting, Employee]),

  controllers: [MeetingController],

  providers: [MeetingService]

})
export class MeetingModule { }
