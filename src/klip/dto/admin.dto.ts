import { IsString } from 'class-validator';

export class CreateAdminKlipDto {
  @IsString()
  name: string;

  @IsString()
  age: number;

  @IsString()
  email: string;
}
