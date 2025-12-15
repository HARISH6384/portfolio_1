import { IsEmpty, IsNotEmpty, IsNumber, IsString } from "class-validator";



export default class Createdto{
    @IsString()
    @IsNotEmpty()
    name:string



      @IsString()
    @IsNotEmpty()
    email:string

   

      @IsString()
    @IsNotEmpty()
    description:string

}

