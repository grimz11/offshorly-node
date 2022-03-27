import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { TodoRequestDto } from './dto/todo-request.dto';
import { ITodoResultDto } from './dto/todo-result.dto';

@Controller({ path: 'todos', version: 'v1' })
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @HttpCode(200)
  async getAllAsync(): Promise<ITodoResultDto[]> {
    return await this.appService.getAllAsync();
  }

  @Patch(':id')
  @HttpCode(204)
  async updateTodoAsync(@Param() { id }: TodoRequestDto): Promise<void> {
    await this.appService.updateAsync(id);
  }

  @Delete(':id')
  @HttpCode(204)
  async deleteTodoAsync(@Param() { id }: TodoRequestDto): Promise<void> {
    await this.appService.deleteAsync(id);
  }

  @Post()
  @HttpCode(200)
  async createTodoAsync(@Body() todo: TodoRequestDto): Promise<ITodoResultDto> {
    return this.appService.createAsync(todo);
  }
}
