import { PrismaService } from '$/prisma/prisma.service';
import { handleError } from '$/utils/handle-error.util';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Product[]> {
    return this.prisma.product.findMany();
  }

  async findById(id: string): Promise<Product> {
    const record = await this.prisma.product.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`Product with ID '${id}' not found`);
    }

    return record;
  }

  async findOne(id: string): Promise<Product> {
    return await this.findById(id); // check if record exists
  }

  async create(dto: CreateProductDto): Promise<Product> {
    const data: Product = { ...dto };

    return await this.prisma.product.create({ data }).catch(handleError);
  }

  async update(id: string, dto: UpdateProductDto): Promise<Product> {
    await this.findById(id); // check if record exists
    const data: Partial<Product> = { ...dto };

    return this.prisma.product
      .update({ where: { id }, data })
      .catch(handleError);
  }

  async delete(id: string): Promise<Product> {
    await this.findById(id); // check if record exists
    return this.prisma.product.delete({ where: { id } });
  }

  // ============================================================
}
