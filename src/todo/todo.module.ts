import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TodoRepository } from './todo.repository';

@Module({
  imports: [PrismaModule],
  controllers: [TodoController],
  providers: [TodoService, TodoRepository],
  exports: []
})
export class TodoModule {}
