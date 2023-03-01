import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Order } from 'src/orders/schemas/order.schema';
import { MenuItem } from './menu.entity';

export type RestaurantDocument = HydratedDocument<Restaurant>;

@Schema()
export class Restaurant {
  @Prop()
  name: string;

  @Prop({ type: [MenuItem], default: [] })
  menu: MenuItem[];

  @Prop({ type: [Order], default: [] })
  orders: Order[];
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant)