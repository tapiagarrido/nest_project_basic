import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class UpdateUserDto extends PartialType(CreateUserDto) {

    @IsOptional()
    @IsString()
    name:string

    @IsOptional()
    @IsString()
    surname:string

    @IsOptional()
    @IsNumber()
    age:number
}

