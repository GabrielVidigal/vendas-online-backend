import {Body, Controller, Get, Post, Patch, UsePipes, ValidationPipe, Param } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
import { ReturnUserDto } from './dtos/returnUser.dto';
import { UpdatePasswordDTO } from './dtos/update-password.dto';
import { UserId } from '../decorators/user-id.decorator';
import { UserType } from './enum/user-type.enum';
import { Roles } from 'src/decorators/roles.decorator';


@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @UsePipes(ValidationPipe)
    @Post()
    async createUser(@Body() createUser: CreateUserDto): Promise<UserEntity> {
        return this.userService.createUser(createUser);
    }

    @Roles(UserType.Admin)
    @Get()
    async getAllUser(): Promise<ReturnUserDto[]> {
        return (await this.userService.getAllUser()).map(
            (UserEntity) => new ReturnUserDto(UserEntity)
        );
    }

    @Roles(UserType.Admin)
    @Get('/:userId')
    async getUserById(@Param('userId') userId: number): Promise<ReturnUserDto> {
        return new ReturnUserDto(
           await this.userService.getUserByIdUsingRelations(userId),
        )
    }

    @Roles(UserType.Admin, UserType.User)
    @Patch()
    @UsePipes(ValidationPipe)
    async updatPasswordUser (@Body() UpdatePasswordDTO: UpdatePasswordDTO, @UserId() userId: number): Promise<UserEntity> {
        return this.userService.updatePasswordUser(UpdatePasswordDTO, userId)
    }
}
