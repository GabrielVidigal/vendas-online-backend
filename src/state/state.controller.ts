import { Controller, Get } from '@nestjs/common';
import { StateService } from './state.service';
import { StateEntity } from './entities/state.entity'

@Controller('state')
export class StateController {
    constructor(private readonly stateService: StateService) {}

    @Get()
    async getAllStete(): Promise<StateEntity[]>{
        return this.stateService.getAllState();
    }
}
