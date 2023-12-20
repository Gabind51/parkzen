import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ParkSlotDocument = HydratedDocument<ParkSlot>;

@Schema()
export class ParkSlot {
  @Prop({ required: 'true' })
  id: string;

  @Prop({ required: 'true' })
  firstName: string;

  @Prop({ required: 'true' })
  lastName: string;

  @Prop({ required: 'true' })
  priceForOneHour: number;

  @Prop({ required: 'true' })
  createdAt: Date;
}

export const ParkSlotModelName = ParkSlot.name;

export const ParkSlotSchema = SchemaFactory.createForClass(ParkSlot);
