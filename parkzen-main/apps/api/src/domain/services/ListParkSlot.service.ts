import { Inject } from '@nestjs/common';
import { ParkSlotRepository } from 'src/domain/interface/ParkSlotRepository.interface';
import { ParkSlot } from '../entities/ParkSlot';

export class ListParkSlot {
  public constructor(
    @Inject(ParkSlotRepository)
    private parkSlotRepository: ParkSlotRepository,
  ) {}

  public async handle(): Promise<ParkSlot[]> {
    return this.parkSlotRepository.list();
  }
}
