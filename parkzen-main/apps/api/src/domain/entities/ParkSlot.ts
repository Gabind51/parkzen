import { CreateParkDTO } from 'src/dto/CreatePark.dto';
import { v4 as uuid } from 'uuid';

type ParkSlotProps = {
  id: string;
  firstName: string;
  lastName: string;
  priceForOneHour: number;
  createdAt: Date;
};

export class ParkSlot {
  private id: string;
  private firstName: string;
  private lastName: string;
  private priceForOneHour: number;
  private createdAt: Date;

  private constructor(state: ParkSlotProps) {
    this.id = state.id;
    this.firstName = state.firstName;
    this.lastName = state.lastName;
    this.priceForOneHour = state.priceForOneHour;
    this.createdAt = state.createdAt;
  }

  public static createByUser(payload: CreateParkDTO) {
    return new ParkSlot({
      ...payload,
      id: uuid(),
      createdAt: new Date(),
    });
  }

  public static fromState(state: ParkSlotProps) {
    return new ParkSlot(state);
  }
}
