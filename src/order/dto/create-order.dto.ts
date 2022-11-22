import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNumber, IsPositive, IsUUID } from 'class-validator';

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

  @IsUUID(undefined, {
    each: true, // <--- isso é importante, indica que deve validar cada item do array
    message: 'O ID do produto deve ser um UUID válido', // <--- mensagem de erro
  })
  @ApiProperty({
    description: 'Lista com os IDs dos produtos existentes no pedido',
    example: [
      '2cd2606a-c2db-44e6-92c2-c28847fd3d61',
      '2a5af415-71ba-4138-873f-7263b01249be',
    ],
  })
  products: string[];
}
