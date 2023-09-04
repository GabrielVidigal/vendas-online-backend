import { Test, TestingModule } from '@nestjs/testing';
import { CartProductService } from '../cart-product.service';
import { ProductService } from '../../product/product.service';
import { Repository } from 'typeorm';
import { CartProductEntity } from '../entities/cart-product.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { productMock } from '../../product/__mocks__/product.mock';
import { returnDeleteMock } from '../../__mocks__/return-delete.mocks';
import { cartMock } from '../../cart/__mocks__/cart.mock';

describe('CartProductService', () => {
  let service: CartProductService;
  let productService: ProductService;
  let CarProductRepositoy: Repository<CartProductEntity>

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: ProductService,
          useValue: {
            findProductById: jest.fn().mockResolvedValue(productMock),
          }
        }, 
        {
          provide: getRepositoryToken(CartProductEntity),
          useValue: {
            findOne: '',
            save: '',
            delete: jest.fn().mockResolvedValue(returnDeleteMock)
            ,
          }
        },
        CartProductService],
    }).compile();

    service = module.get<CartProductService>(CartProductService);
    productService = module.get<ProductService>(ProductService);
    CarProductRepositoy = module.get<Repository<CartProductEntity>>(getRepositoryToken(CartProductEntity));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(productService).toBeDefined();
    expect(CarProductRepositoy).toBeDefined();
  });

  it('sould return Delete Result after delete product', async () => {
    const deleteResult = await service.deleteProductCart(productMock.id, cartMock.id);

    expect(deleteResult).toEqual(returnDeleteMock)
  })

  it('sould return error in expection delete', async () => {
    jest.spyOn(CarProductRepositoy, 'delete').mockRejectedValue(new Error());

    expect(
      service.deleteProductCart(productMock.id, cartMock.id),
    ).rejects.toThrowError();
  })
});
