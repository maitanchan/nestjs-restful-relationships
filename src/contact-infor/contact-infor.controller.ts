import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContactInforService } from './contact-infor.service';
import { CreateContactInforDto } from './dto/create-contact-infor.dto';
import { UpdateContactInforDto } from './dto/update-contact-infor.dto';

@Controller('contact-infor')
export class ContactInforController {

  constructor(private readonly contactInforService: ContactInforService) { }

  @Post()
  create(@Body() createContactInforDto: CreateContactInforDto) {

    return this.contactInforService.create(createContactInforDto)

  }

  @Get()
  findAll() {

    return this.contactInforService.findAll()

  }

  @Get(':id')
  findOne(@Param('id') id: string) {

    return this.contactInforService.findOne(+id)

  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContactInforDto: UpdateContactInforDto) {

    return this.contactInforService.update(+id, updateContactInforDto)

  }

  @Delete(':id')
  remove(@Param('id') id: string) {

    return this.contactInforService.remove(+id)

  }
}
