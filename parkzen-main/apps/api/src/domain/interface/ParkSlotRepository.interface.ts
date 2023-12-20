import { ParkSlot } from 'src/domain/entities/ParkSlot';

export const ParkSlotRepository = 'ParkSlotRepository';

export interface ParkSlotRepository {
  create(parkSlot: ParkSlot): Promise<void>;
  list(): Promise<ParkSlot[]>;
}
