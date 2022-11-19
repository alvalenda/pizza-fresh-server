import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { PrismaModule } from '$/prisma/prisma.module';

@Module({
  imports: [PrismaModule], // <--- Add this line to import the service
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
