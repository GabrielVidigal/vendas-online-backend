import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  Put,
} from '@nestjs/common';
import { Roles } from '../decorators/roles.decorator';
import { UserType } from '../user/enum/user-type.enum';
import { CategoryService } from './category.service';
import { ReturnCategory } from './dtos/return-category.dto';
import { CreateCategory } from './dtos/create-category.dto';
import { CategoryEntity } from './entities/category.entity';
import { DeleteResult } from 'typeorm';
import { UpdateCategory } from './dtos/update-category.dto copy';

@Roles(UserType.Admin, UserType.Root, UserType.User)
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async findAllCategories(): Promise<ReturnCategory[]> {
    return this.categoryService.findAllCategories()
  }

  @Roles(UserType.Admin, UserType.Root)
  @UsePipes(ValidationPipe)
  @Post()
  async createCategory(
    @Body() createCategory: CreateCategory,
  ): Promise<CategoryEntity> {
    return this.categoryService.createCategory(createCategory);
  }

  @Roles(UserType.Admin, UserType.Root)
  @Delete(':categoryId')
  async deleteCategory(@Param('categoryId') categoryId: number): Promise<DeleteResult> {
    return this.categoryService.deleteCategory(categoryId)
  }

  @Roles(UserType.Admin, UserType.Root)
  @UsePipes(ValidationPipe)
  @Put(':categoryId')
  async editCategory(@Param('categoryId') categoryId: number, @Body() updateCategory: UpdateCategory): Promise<CategoryEntity> {
    return this.categoryService.editCategory(categoryId, updateCategory)  
  }
}
