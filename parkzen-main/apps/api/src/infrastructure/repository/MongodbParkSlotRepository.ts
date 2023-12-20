import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ParkSlot } from 'src/domain/entities/ParkSlot';
import { ParkSlotRepository } from 'src/domain/interface/ParkSlotRepository.interface';
import { ParkSlotDocument, ParkSlotModelName } from './parkslot.model';

export class MongodbParkSlotRepository implements ParkSlotRepository {
  public constructor(
    @InjectModel(ParkSlotModelName)
    private parkSlotModel: Model<ParkSlotDocument>,
  ) {}

  public async create(parkSlot: ParkSlot): Promise<void> {
    await this.parkSlotModel.create(parkSlot);
  }

  public async list(): Promise<ParkSlot[]> {
    const listParkSlots = await this.parkSlotModel.find({});
    console.log(listParkSlots);
    return listParkSlots.map((state) => ParkSlot.fromState(state));
  }
}
