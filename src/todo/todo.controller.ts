import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
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
  async getTodo() {
    return await this.todoService.getTodo();
  }

  @Patch('update-status/:id')
  async updateStatus(@Param('id') id: string, @Body() updateStatusDto: UpdateStatusDto) {
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
