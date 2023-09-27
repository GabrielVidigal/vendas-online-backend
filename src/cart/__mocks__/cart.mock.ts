import { userEntityMock } from '../../user/__mocks__/user.mock';
import { CartEntity } from '../entities/cart.entity';

export const cartMock: CartEntity = {
  active: true,
  createdAt: new Date(),
  id: 65775,
  updatedAt: new Date(),
  userId: userEntityMock.id,
};
