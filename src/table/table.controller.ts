import { Controller, Get, Post } from '@nestjs/common';
import { TableService } from './table.service';

@Controller('table')
export class TableController {
  constructor(private readonly tableService: TableService) {}

  @Get()
  findAll(): string {
    return this.tableService.findAll();
  }

  @Post()
  create(): string {
    return this.tableService.create();
  }
}
