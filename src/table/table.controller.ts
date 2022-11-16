import { Controller, Get } from '@nestjs/common';

@Controller('table')
export class TableController {
  @Get()
  findAll(): string {
    return 'This action returns all tables';
  }
}
