import {
  Body,
  Controller,
  Get,
  Post,
  Patch,
  UsePipes,
  ValidationPipe,
  Param,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
import { ReturnUserDto } from './dtos/returnUser.dto';
import { UpdatePasswordDTO } from './dtos/update-password.dto';
import { UserId } from '../decorators/user-id.decorator';
import { UserType } from './enum/user-type.enum';
import { Roles } from '../decorators/roles.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Roles(UserType.Root)
  @Post('/admin')
  async createAdmin(@Body() createUser: CreateUserDto): Promise<UserEntity> {
    return this.userService.createUser(createUser, UserType.Admin);
  }

  @UsePipes(ValidationPipe)
  @Post()
  async createUser(@Body() createUser: CreateUserDto): Promise<UserEntity> {
    return this.userService.createUser(createUser);
  }

  @Roles(UserType.Admin, UserType.Root)
  @Get('/all')
  async getAllUser(): Promise<ReturnUserDto[]> {
    return (await this.userService.getAllUser()).map(
      (UserEntity) => new ReturnUserDto(UserEntity),
    );
  }

  @Roles(UserType.Admin, UserType.Root)
  @Get('/:userId')
  async getUserById(@Param('userId') userId: number): Promise<ReturnUserDto> {
    return new ReturnUserDto(
      await this.userService.getUserByIdUsingRelations(userId),
    );
  }

  @Roles(UserType.Admin, UserType.Root, UserType.User)
  @Patch()
  @UsePipes(ValidationPipe)
  async updatePasswordUser(
    @Body() UpdatePasswordDTO: UpdatePasswordDTO,
    @UserId() userId: number,
  ): Promise<UserEntity> {
    return this.userService.updatePasswordUser(UpdatePasswordDTO, userId);
  }

  @Roles(UserType.Admin, UserType.Root, UserType.User)
  @Get()
  async getInfoUser(@UserId() userId: number): Promise<ReturnUserDto> {
    return new ReturnUserDto(
      await this.userService.getUserByIdUsingRelations(userId),
    )
  }
}
