import { StateEntity } from '../entities/state.entity';

export class ReturnSteteDto {
  name: string;

  constructor(state: StateEntity) {
    this.name = state.name;
  }
}
