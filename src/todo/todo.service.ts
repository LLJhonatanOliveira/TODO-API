import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoRepository } from './todo.repository';

@Injectable()
export class TodoService {
  
  constructor(private readonly repository: TodoRepository) {}

  async create(body: CreateTodoDto) {
    return await this.repository.createTodo(body)
  }

  async getTodo() {
    return await this.repository.getTodo();
  }

  async getTodos( skip: number, take: number ) {
    return await this.repository.getTodos(skip, take);
  }
  
  async updateStatus(id: number, status: boolean) {
    return await this.repository.updateStatus(id, status);
  }

  async updateTodo(id: number, body: UpdateTodoDto) {
    return await this.repository.updateTodo(id, body)
  }

  async deleteOne(id: number) {
    return await this.repository.deleteOne(id);
  }
}
