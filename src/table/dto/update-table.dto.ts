import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateTableDto } from './create-table.dto';

export class UpdateTableDto extends PartialType(CreateTableDto) {
  @ApiProperty({
    description: 'O número da mesa',
    example: 13,
  })
  number: number;
}

// precisa instalar a dependência:
// npm i @nestjs/mapped-types
/*
  "dependencies": {
    "@nestjs/mapped-types": "^1.0.1"
  },
*/

// Precisei declarar number novamente porque o PartialType não copia o decorator ApiProperty
// https://docs.nestjs.com/openapi/mapped-types
