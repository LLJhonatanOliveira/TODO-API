import { IsNotEmpty, IsDateString, IsBoolean} from "class-validator";

export class CreateTodoDto {
  @IsNotEmpty()
  title: string;
  
  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsDateString()
  dueDate: string;

  @IsBoolean()
  status: boolean;
}

