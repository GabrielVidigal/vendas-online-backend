import { productMock } from '../../product/__mocks__/product.mock';
import { UpdateCartDTO } from '../dtos/update-cart.dto';

export const updateCartMock: UpdateCartDTO = {
  amount: 53445,
  productId: productMock.id,
};
