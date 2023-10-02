import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderProductEntity } from './entities/order-product.entity';
import { In, Repository } from 'typeorm';
import { ReturnGroupOrder } from './dtos/return-group-order.dto';

@Injectable()
export class OrderProductService {
  constructor(
    @InjectRepository(OrderProductEntity)
    private readonly OrderProductRepository: Repository<OrderProductEntity>,
  ) {}

  async createOrderProduct(
    productId: number,
    orderId: number,
    price: number,
    amount: number,
  ): Promise<OrderProductEntity> {
    return this.OrderProductRepository.save({
      amount,
      orderId,
      price,
      productId,
    });
  }

  async findAmountProductsByOrderId(
    orderId: number[],
  ): Promise<ReturnGroupOrder[]> {
    return this.OrderProductRepository
      .createQueryBuilder('order_product')
      .select('order_product.order_id, COUNT(*) as total')
      .where('order_product.order_id IN (:...ids)', { ids: orderId })
      .groupBy('order_product.order_id')
      .getRawMany();
  }
}
