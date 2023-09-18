import { Injectable } from '@nestjs/common';
import { CreateContactInforDto } from './dto/create-contact-infor.dto';
import { UpdateContactInforDto } from './dto/update-contact-infor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ContactInfor } from './entities/contact-infor.entity';
import { Repository } from 'typeorm'

@Injectable()
export class ContactInforService {

  constructor(@InjectRepository(ContactInfor) private readonly contactRepository: Repository<ContactInfor>) { }

  async create(createContactInforDto: CreateContactInforDto) {

    const contact = this.contactRepository.create({ ...createContactInforDto })

    await this.contactRepository.save(contact)

    return contact

  }

  findAll() {
    return `This action returns all contactInfor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contactInfor`;
  }

  update(id: number, updateContactInforDto: UpdateContactInforDto) {
    return `This action updates a #${id} contactInfor`;
  }

  remove(id: number) {
    return `This action removes a #${id} contactInfor`;
  }
}
