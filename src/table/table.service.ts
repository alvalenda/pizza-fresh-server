import { Injectable } from '@nestjs/common';

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

  create(): string {
    return 'This action adds a new table';
  }
}
