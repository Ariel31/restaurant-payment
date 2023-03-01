import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { MenuItemCategories } from '../enums/menu-item-categories.enum';

export type MenuDocument = HydratedDocument<MenuItem>;

@Schema()
export class MenuItem {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: number;

  @Prop()
  about: string;

  @Prop({ type: String, enum: MenuItemCategories, required: true })
  category: MenuItemCategories;
}

export const MenuSchema = SchemaFactory.createForClass(MenuItem) 