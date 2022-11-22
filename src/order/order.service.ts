import { PrismaService } from '$/prisma/prisma.service';
import { handleError } from '$/utils/handle-error.util';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Order[]> {
    return this.prisma.order.findMany();
  }

  async findById(id: string): Promise<Order> {
    const record = await this.prisma.order.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`Order with ID '${id}' not found`);
    }

    return record;
  }

  async findOne(id: string): Promise<Order> {
    return await this.findById(id); // check if record exists
  }

  async create(dto: CreateOrderDto): Promise<Order> {
    const data: Prisma.OrderCreateInput = {
      user: {
        connect: {
          id: dto.userId,
        },
      },
      table: {
        connect: {
          number: dto.tableNumber,
        },
      },
    };

    return await this.prisma.order.create({ data }).catch(handleError);
  }

  async delete(id: string) {
    await this.findById(id); // check if record exists
    await this.prisma.order.delete({ where: { id } });
  }
}
// ============================================================
