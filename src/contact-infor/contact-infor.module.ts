import { Module } from '@nestjs/common';
import { ContactInforService } from './contact-infor.service';
import { ContactInforController } from './contact-infor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactInfor } from './entities/contact-infor.entity';

@Module({

  imports: [

    TypeOrmModule.forFeature([ContactInfor])

  ],

  controllers: [
    ContactInforController
  ],

  providers: [
    ContactInforService
  ]

})
export class ContactInforModule { }
