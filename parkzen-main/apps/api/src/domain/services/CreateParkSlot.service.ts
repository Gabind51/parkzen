import { Inject } from '@nestjs/common';
import { CreateParkDTO } from 'src/dto/CreatePark.dto';
import { ParkSlot } from 'src/domain/entities/ParkSlot';
import { ParkSlotRepository } from 'src/domain/interface/ParkSlotRepository.interface';

export class CreateParkSlot {
  public constructor(
    @Inject(ParkSlotRepository)
    private parkSlotRepository: ParkSlotRepository,
  ) {}

  public async handle(payload: CreateParkDTO): Promise<void> {
    const slot = ParkSlot.createByUser(payload);

    await this.parkSlotRepository.create(slot);
  }
}
