import { ApiProperty } from '@nestjs/swagger';
import { Payment } from '../types/payment.type';

export class CreateOrderDto {
    @ApiProperty()
    restaurant_id: string;

    @ApiProperty()
    table_id: string;

    @ApiProperty()
    status: boolean;

    @ApiProperty()
    category: string;

    @ApiProperty()
    userPayments: Payment[];
}
