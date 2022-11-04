import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Payment } from './payments.entity';

export type OrderDocument = HydratedDocument<Order>;

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

  @Prop({type: [Payment], default: []})
  users_payments: Payment[]
}

export const OrderSchema = SchemaFactory.createForClass(Order)