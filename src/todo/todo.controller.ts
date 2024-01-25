import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateStatusDto, UpdateTodoDto } from './dto/update-todo.dto';

@Controller('')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post('create-todo')
  async create(@Body() createTodoDto: CreateTodoDto) {
    return await this.todoService.create(createTodoDto);
  }

  @Get('get-todo')
  async getTodo(
    @Query('page') page: number
  ) {
    const startIndex = (page - 1)*5
    const endIndex = startIndex + 5;
    
    const totalTodos = await this.todoService.getTodo()

    const todos = await this.todoService.getTodos(
      startIndex,
      5
    );
    return {
      data: todos,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(totalTodos / 5)
      }
    }
  }

  @Patch('update-status/:id')
  async updateStatus(@Param('id') id: string, @Body() updateStatusDto: UpdateStatusDto) {
    console.log(updateStatusDto)
    return await this.todoService.updateStatus(+id, updateStatusDto.status);
  }

  @Patch('update-todo/:id')
  async updateTodo(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return await this.todoService.updateTodo(+id, updateTodoDto);
  }

  @Delete('delete-todo/:id')
  async deleteOne(@Param('id') id: string) {
    return await this.todoService.deleteOne(+id);
  }
}
