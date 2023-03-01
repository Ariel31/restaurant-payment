import { OmitType, PickType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './create-order.dto';

// eslint-disable-next-line prettier/prettier
export class UpdateOrderDto extends OmitType(CreateOrderDto, ['userPayments']) {}
// eslint-disable-next-line prettier/prettier
export class UpdateUserPaymentsDto extends PickType(CreateOrderDto, ['userPayments']) {}
