import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeModule } from './employee/employee.module';
import { ContactInforModule } from './contact-infor/contact-infor.module';
import { TaskModule } from './task/task.module';
import { MeetingModule } from './meeting/meeting.module';

@Module({

  imports: [

    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './db',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true
    }),

    EmployeeModule,

    ContactInforModule,

    TaskModule,

    MeetingModule

  ],

})
export class AppModule { }
