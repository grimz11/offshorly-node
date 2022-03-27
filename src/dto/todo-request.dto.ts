import { IsNotEmpty } from 'class-validator';

export class TodoRequestDto {
  id: number;

  @IsNotEmpty()
  text: string;

  state: boolean;
}
