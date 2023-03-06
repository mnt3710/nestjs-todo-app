import { UpdateTaskDto } from './update-task.dto';
import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './create-task.dto';

@Controller('todo')
export class TodoController {
  constructor(private prisma: PrismaService) {}

  @Get('list')
  async getList() {
    const result = await this.prisma.task.findMany();
    return [...result];
  }

  @Post('')
  async add(@Body() task: CreateTaskDto) {
    const result = await this.prisma.task.create({
      data: task,
    });
    return {
      status: 'OK',
    };
  }

  @Post(':id/done')
  async done(@Param() param: UpdateTaskDto) {
    await this.prisma.task.update({
      data: {
        is_done: true,
      },
      where: {
        id: param.id,
      },
    });
    return {
      status: 'OK',
    };
  }
}
