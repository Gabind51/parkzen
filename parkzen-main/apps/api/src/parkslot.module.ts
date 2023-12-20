import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongodbParkSlotRepository } from './infrastructure/repository/MongodbParkSlotRepository';
import {
  ParkSlotModelName,
  ParkSlotSchema,
} from './infrastructure/repository/parkslot.model';
import { ParkSlotRepository } from './domain/interface/ParkSlotRepository.interface';
import { ParkSlotController } from './infrastructure/controller/parkslot.controller';
import { CreateParkSlot } from './domain/services/CreateParkSlot.service';
import { ListParkSlot } from './domain/services/ListParkSlot.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ParkSlotModelName, schema: ParkSlotSchema },
    ]),
  ],
  controllers: [ParkSlotController],
  providers: [
    { provide: ParkSlotRepository, useClass: MongodbParkSlotRepository },
    CreateParkSlot,
    ListParkSlot,
  ],
})
export class ParkSlotModule {}
