import { PrismaService } from '$/prisma/prisma.service';
import type { OrderWithRelations } from '$/types/types';
import { handleError } from '$/utils/handle-error.util';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
  private selectAllOrders = {
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
    _count: {
      select: {
        products: true,
      },
    },
  };

  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.order.findMany({
      select: {
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
        _count: {
          select: {
            products: true,
          },
        },
      },
    });
  }

  async findOne(id: string) {
    return await this.prisma.order.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            name: true,
          },
        },
        table: {
          select: {
            number: true,
          },
        },
        products: {
          select: {
            id: true,
            name: true,
            price: true,
            image: true,
            description: true,
          },
        },
      },
    }); // check if record exists
  }

  async create(dto: CreateOrderDto) {
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
        select: this.selectAllOrders,
      })
      .catch(handleError);
  }

  async delete(id: string) {
    await this.prisma.order.delete({ where: { id } });
  }
}
// ============================================================
