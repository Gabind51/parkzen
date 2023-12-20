import { NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { ParkSlot } from '../entities/ParkSlot';

export class DeleteParkSlot {
  public constructor(
    @InjectModel('Parks') private readonly parkSlotModel: Model<ParkSlot>,
  ) {}

  public async deleteParkById(parkId: string): Promise<void> {
    const park = await this.parkSlotModel.findById(parkId).exec();
    if (!park) {
      throw new NotFoundException(
        `Aucun parkSlot avec l'id ${parkId} n'a été trouvé.`,
      );
    }
    await this.parkSlotModel.findByIdAndDelete(parkId).exec();
  }
}
