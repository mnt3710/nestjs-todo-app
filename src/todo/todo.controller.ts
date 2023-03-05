import { Controller, Get } from '@nestjs/common';

@Controller('todo')
export class TodoController {
  @Get('list')
  getList() {
    return [
      {
        title: '牛乳を買いに行く',
        due_on: '2023-03-24',
        done: false,
      },
    ];
  }
}
