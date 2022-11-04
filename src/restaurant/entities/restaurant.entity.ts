import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { MenuItem } from './menu.entity';

export type RestaurantDocument = HydratedDocument<Restaurant>;

@Schema()
export class Restaurant {
  @Prop()
  name: string;

  @Prop({type: [MenuItem], default: []})
  menu: MenuItem[]
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant)