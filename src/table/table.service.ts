import { Injectable } from '@nestjs/common';
import { CreateTableDto } from './dto/create-table.dto';

@Injectable()
export class TableService {
  // private readonly tables: Table[] = [];
  // findAll(): Table[] {
  //   return this.tables;
  // }
  // create(table: Table) {
  //   this.tables.push(table);
  // }
  findAll(): string {
    return 'This action returns all table';
  }

  create(createTableDto: CreateTableDto): string {
    return 'This action adds a new table' + JSON.stringify(createTableDto);
  }
}
