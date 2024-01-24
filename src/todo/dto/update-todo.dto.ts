import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from './create-todo.dto';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsString()
    @IsNotEmpty()
    description: string;
}

export class UpdateStatusDto extends PartialType(CreateTodoDto) {
    @IsNotEmpty()
    @IsBoolean()
    status: boolean;
}

export class Id  {
    @IsNotEmpty()
    @IsNumber()
    id: number;
   
}


