import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto, UpdateUserPaymentsDto } from './dto/update-order.dto';
import { OrdersQueryParams } from './dto/orders-query.dto';

@Injectable()
export class OrdersService {

  create(createOrderDto: CreateOrderDto) {
    return 'This action adds a new order';
  }

  getOrdersOfRestaurant(restaurantId: string, queryParams: OrdersQueryParams) {
    return;
  }

  getOrder(id: string) {
    return;
  }

  getOrderByUser(id: string) {
    return;
  }

  addUserPaymentsToOrder(orderId: string, updateUserPaymentsDto: UpdateUserPaymentsDto) {
    return;
  }

  update(orderId: string, updateOrderDto: UpdateOrderDto) {
    return;
  }

  remove(id: string) {
    return;
  }
}
