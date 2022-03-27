import { Inject, Injectable } from '@nestjs/common';
import { TODO_REPOSITORY } from './app.constant';
import { Todo } from './app.entity';
import { TodoRequestDto } from './dto/todo-request.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject(TODO_REPOSITORY) private readonly todoRepository: typeof Todo,
  ) {}

  async getAllAsync(): Promise<Todo[]> {
    return await this.todoRepository.findAll<Todo>({
      order: [['createdAt', 'DESC']],
    });
  }

  async createAsync(payload: TodoRequestDto): Promise<Todo> {
    const todo = Object.assign(new Todo(), { ...payload, state: true });
    return await this.todoRepository.create<Todo>(todo.get());
  }

  async deleteAsync(id: number): Promise<void> {
    await this.todoRepository.destroy({ where: { id } });
  }

  async updateAsync(id: number): Promise<any> {
    const todo = await this.todoRepository.findOne({ where: { id } });
    todo.state = !todo.state;

    return await this.todoRepository.update<Todo>(todo.get(), {
      where: { id },
    });
  }
}
