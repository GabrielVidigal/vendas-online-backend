import { categoryMock } from "../../category/__mocks__/category.mock";
import { CreateProductDTO } from "../dtos/create-product.dto";

export const createProduct: CreateProductDTO = {
    categoryId: categoryMock.id,
    image: 'fadfas',
    name: 'nome mock product',
    price: 25.0,
}