import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose'

export type NewsDocument = News & Document

@Schema()
export class News {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  text: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  publicationDate: string;
}

export const NewsSchema = SchemaFactory.createForClass(News)