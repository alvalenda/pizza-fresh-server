import { Controller, Get, Post } from '@nestjs/common';

@Controller('table')
export class TableController {
  @Get()
  findAll(): string {
    return 'This action returns all tables';
  }

  @Post()
  create(): string {
    return 'This action adds a new table';
  }
}
