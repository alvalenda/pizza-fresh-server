import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @ApiProperty({
    description: 'O nome do produto',
    example: 'Coca-Cola',
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'A descrição do produto',
    example: 'Refrigerante de cola',
  })
  description: string;

  @IsNumber({
    maxDecimalPlaces: 2,
  })
  @IsPositive()
  @ApiProperty({
    description: 'O preço do produto',
    example: 5.5,
  })
  price: number;

  @IsString()
  @ApiProperty({
    description: 'A imagem do produto',
    example:
      'https://t4.ftcdn.net/jpg/02/84/65/61/360_F_284656117_sPF8gVWaX627bq5qKrlrvCz1eFfowdBf.jpg',
  })
  image: string;
}
