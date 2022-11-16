import { Injectable } from '@nestjs/common';
import { CreateTableDto } from './dto/create-table.dto';
import { Table } from './entities/table.entity';

@Injectable()
export class TableService {
  private readonly tables: Table[] = [];

  findAll(): Table[] {
    return this.tables;
  }

  create(createTableDto: CreateTableDto) {
    const table: Table = {
      id: (this.tables.length + 1).toString(),
      ...createTableDto,
    };
    this.tables.push(table);
    return table;
  }
}
