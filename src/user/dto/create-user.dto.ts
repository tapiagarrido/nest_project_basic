import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateUserDto {

    @IsNotEmpty()
    @IsString()
    name:string

    @IsNotEmpty()
    @IsString()
    surname:string

    @IsNotEmpty()
    @IsNumber()
    age:number
}
