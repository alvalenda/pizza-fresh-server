import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, IsString, IsUUID } from 'class-validator';

export class CreateOrderProductDto {
  @IsUUID(
    undefined, // version undefined
    {
      message: 'O ID do produto deve ser um UUID válido',
    },
  )
  @ApiProperty({
    description: 'ID do produto',
    example: '2cd2606a-c2db-44e6-92c2-c28847fd3d61',
  })
  productId: string;

  @IsInt()
  @IsPositive()
  @ApiProperty({
    description: 'Quantidade de produtos',
    example: 1,
  })
  quantity: number;

  @IsString()
  @ApiProperty({
    description: 'Observações do produto',
    example: 'Com gelo e limão',
  })
  description: string;
}
