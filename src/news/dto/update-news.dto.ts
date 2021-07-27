import { IsString, IsOptional } from 'class-validator';

export class UpdateNewsDto {
  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  text: string;

  @IsString()
  @IsOptional()
  description: string;
}