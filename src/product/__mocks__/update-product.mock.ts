import { categoryMock } from "../../category/__mocks__/category.mock";
import { UpdateProductDTO } from "../dtos/update-product.dto";

export const updateProductMock: UpdateProductDTO = {
    categoryId: categoryMock.id,
    image: 'dfasdfasd',
    name: 'fdasfasdf',
    price: 44.0,
}