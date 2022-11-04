import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MenuDocument = HydratedDocument<MenuItem>;

@Schema()
export class MenuItem {
  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  about: string;

  @Prop()
  category: string;
}

export const MenuSchema = SchemaFactory.createForClass(MenuItem)