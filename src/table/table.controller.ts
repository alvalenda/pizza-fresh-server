import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTableDto } from './dto/create-table.dto';
import { TableService } from './table.service';

@Controller('table')
export class TableController {
  constructor(private readonly tableService: TableService) {}

  @Get()
  findAll(): string {
    return this.tableService.findAll();
  }

  @Post()
  create(@Body() createTableDto: CreateTableDto): string {
    return this.tableService.create(createTableDto);
  }
}

// DTO (Data Transfer Object)
