import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import {  UpdateTodoDto } from './dto/update-todo.dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class TodoRepository {
  
  constructor(private readonly prisma: PrismaService) {}

  getTodo(){
    return this.prisma.todo.count({
      
    })
  }
  getTodos(skip: number, take: number){
  return this.prisma.todo.findMany({
  skip, take,
  orderBy: {
    id: 'asc'
  }
})
  }

  createTodo(body: CreateTodoDto){
    return this.prisma.todo.create({data: body})
  }

  updateTodo(id: number, updateData: UpdateTodoDto){
    return this.prisma.todo.update({
      where: {id: id},
      data: {
        title: updateData.title,
        description: updateData.description
      }   
    })
  }

  updateStatus(id:  number, status: boolean){
    
    return this.prisma.todo.update({
      where: {id: id},
      data: {
        status: !status,
      },
    })
  }

  deleteOne(id: number){
    return this.prisma.todo.delete({
      where: {id}
    })
  }
}
