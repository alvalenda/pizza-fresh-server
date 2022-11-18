import { PrismaService } from '$/prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { Table } from './entities/table.entity';

@Injectable()
export class TableService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Table[]> {
    return this.prisma.table.findMany();
  }

  async findById(id: string): Promise<Table> {
    const record = await this.prisma.table.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`Table with ID '${id}' not found`);
    }

    return record;
  }

  async findOne(id: string): Promise<Table> {
    return await this.findById(id); // check if record exists
  }

  create(dto: CreateTableDto): Promise<Table> {
    const data: Table = { ...dto };

    return this.prisma.table.create({ data });
  }

  async update(id: string, dto: UpdateTableDto): Promise<Table> {
    await this.findById(id); // check if record exists
    const data: Partial<Table> = { ...dto };

    return this.prisma.table.update({ where: { id }, data });
  }

  async delete(id: string) {
    await this.findById(id); // check if record exists
    await this.prisma.table.delete({ where: { id } });
  }
}
