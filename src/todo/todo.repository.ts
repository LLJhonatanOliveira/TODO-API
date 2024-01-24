import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class TodoService {
  constructor(private readonly prisma: PrismaService) {}

  getTodo(){
    return this.prisma.todo.findMany()
  }

  createTodo(body: CreateTodoDto){
    return this.prisma.todo.create({data: body})
  }

  updateTodo(id: number, updateData: UpdateTodoDto){
    return this.prisma.todo.update({
      where: {id},
      data: {
        title: updateData.title,
        description: updateData.description
      }   
    })
  }

  updateStatus(id: number, newStatus: boolean){
    return this.prisma.todo.update({
      where: {id},
      data: {
        status: newStatus,
      }
    })
  }
}
