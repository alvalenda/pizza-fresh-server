import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, IsUrl, Matches, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty({
    description: 'O nome do usuário. Utilizado no login. Deve ser único.',
    example: 'flavioalvarenga',
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'Nome de usuário. Apenas para exibição.',
    example: 'Flavio Alvarenga',
  })
  username: string;

  @IsEmail()
  @ApiProperty({
    description: 'O email do usuário',
    example: 'email@email.com',
  })
  email: string;

  @IsString()
  @MinLength(6)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/, {
    message:
      'A senha deve conter pelo menos 6 caracteres, uma letra maiúscula, uma letra minúscula e um número.',
  })
  @ApiProperty({
    description: 'A senha do usuário',
    example: 'Abc@123',
  })
  password: string;

  @IsString()
  @ApiProperty({
    description: 'Confirmação da senha do usuário. Deve ser igual a senha.',
    example: 'Abc@123',
  })
  confirmPassword: string;

  @IsUrl()
  @ApiProperty({
    description: 'Imagem de perfil do usuário. Endereço em URL.',
    example: 'https://avatars.githubusercontent.com/u/13731643',
  })
  image: string;
}
