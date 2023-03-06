import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './todo/todo.controller';
import { PrimaService } from './prima/prima.service';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [],
  controllers: [AppController, TodoController],
  providers: [AppService, PrimaService, PrismaService],
})
export class AppModule {}
