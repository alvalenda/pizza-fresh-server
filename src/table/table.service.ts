import { PrismaService } from '$/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { PrismaPromise } from '@prisma/client';
import { CreateTableDto } from './dto/create-table.dto';
import { Table } from './entities/table.entity';

@Injectable()
export class TableService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): PrismaPromise<Table[]> {
    return this.prisma.table.findMany();
  }

  create(dto: CreateTableDto) {
    const data: Table = { ...dto };

    return this.prisma.table.create({ data });
  }
}
