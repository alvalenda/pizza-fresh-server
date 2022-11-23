import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsPositive, IsUUID, ValidateNested } from 'class-validator';
import { CreateOrderProductDto } from './create-order-product.dto';

export class CreateOrderDto {
  @IsUUID(
    undefined, // version undefined
    {
      message: 'O ID do usuário deve ser um UUID válido',
    },
  )
  @ApiProperty({
    description: 'ID do usuário que realizou o pedido',
    example: '7cd4bd9d-199f-4953-a7bc-c77ee3e5250a',
  })
  userId: string;

  @IsInt()
  @IsPositive()
  @ApiProperty({
    description: 'Número da mesa que o pedido foi realizado',
    example: 1,
  })
  tableNumber: number;

  @ValidateNested({ each: true })
  @Type(() => CreateOrderProductDto)
  @ApiProperty({
    description: 'Lista com os IDs dos produtos existentes no pedido',
    type: [CreateOrderProductDto],
    example: [
      {
        productId: '2cd2606a-c2db-44e6-92c2-c28847fd3d61',
        quantity: 3,
        description: 'Com gelo e limão',
      },
      {
        productId: '2a5af415-71ba-4138-873f-7263b01249be',
        quantity: 1,
        description: 'Borda de catupiry, cebola extra',
      },
    ],
  })
  products: CreateOrderProductDto[];
}
