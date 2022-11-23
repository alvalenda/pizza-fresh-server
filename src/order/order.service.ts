import { PrismaService } from '$/prisma/prisma.service';
import type { OrderWithRelations } from '$/types/types';
import { handleError } from '$/utils/handle-error.util';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
  private selectOrder = {
    id: true,
    table: {
      select: {
        number: true,
      },
    },
    user: {
      select: {
        name: true,
      },
    },
    products: {
      select: {
        name: true,
      },
    },
  };

  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<OrderWithRelations[]> {
    return this.prisma.order.findMany({ select: this.selectOrder });
  }

  async findById(id: string): Promise<OrderWithRelations> {
    const record = await this.prisma.order.findUnique({
      where: { id },
      select: this.selectOrder,
    });

    if (!record) {
      throw new NotFoundException(`Order with ID '${id}' not found`);
    }

    return record;
  }

  async findOne(id: string): Promise<OrderWithRelations> {
    return await this.findById(id); // check if record exists
  }

  async create(dto: CreateOrderDto): Promise<OrderWithRelations> {
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
      products: {
        connect: dto.products.map((id) => ({ id })),
      },
    };

    return await this.prisma.order
      .create({
        data,
        select: this.selectOrder,
      })
      .catch(handleError);
  }

  async delete(id: string) {
    await this.findById(id); // check if record exists
    await this.prisma.order.delete({ where: { id } });
  }
}
// ============================================================
