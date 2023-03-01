import { Controller, Get, Post, Body, Patch, Param, Query } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto, UpdateUserPaymentsDto } from './dto/update-order.dto';
import { OrdersQueryParams } from './dto/orders-query.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) { }

  @ApiOperation({summary: 'create new order in a restaurant'})
  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @ApiOperation({summary: 'get orders of given restaurant'})
  @Get('ordersOfRestaurant/:id')
  findOne(@Param('id') id: string, @Query() queryParams: OrdersQueryParams) {
    return this.ordersService.getOrdersOfRestaurant(id, queryParams);
  }

  @ApiOperation({summary: 'update user payments in the order'})
  @Patch('userPayment/:id')
  updateUserPayment(
    @Param('id') orderId: string,
    @Body() updateUserPaymentsDto: UpdateUserPaymentsDto,
  ) {
    return;
  }

  @ApiOperation({summary: 'update any order parameters for example price'})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(id, updateOrderDto);
  }
}
