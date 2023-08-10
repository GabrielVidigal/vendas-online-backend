import { ReturnSteteDto } from "src/state/dtos/returnState.dto";
import { CityEntity } from "../entities/city.entity";

export class ReturnCityDto {
    name: string;
    state?: ReturnSteteDto;

    constructor(city: CityEntity) {
        this.name = city.name;
        this.state = city.state ? new ReturnSteteDto(city.state) : undefined;
    }
}