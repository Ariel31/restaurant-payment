import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OrderDocument = HydratedDocument<Order>;

class Payment {
  name: string;
  price: number;
}

@Schema()
export class Order {
  @Prop()
  restaurant_id: string;

  @Prop()
  table_id: string;

  @Prop()
  status: boolean;

  @Prop()
  category: string;

  @Prop({ name: 'users_payments' })
  userPayments: [Payment]
}

export const OrderSchema = SchemaFactory.createForClass(Order)