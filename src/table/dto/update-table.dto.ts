import { PartialType } from '@nestjs/swagger';
import { CreateTableDto } from './create-table.dto';

export class UpdateTableDto extends PartialType(CreateTableDto) {}

// PartialType do @nestjs/swagger corrige o problema de não copiar o decorator ApiProperty

// precisa instalar a dependência:
// npm i @nestjs/mapped-types
/*
  "dependencies": {
    "@nestjs/mapped-types": "^1.0.1"
  },
*/

// Precisei declarar number novamente porque o PartialType não copia o decorator ApiProperty
// https://docs.nestjs.com/openapi/mapped-types
