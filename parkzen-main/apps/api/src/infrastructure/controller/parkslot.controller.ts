import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { CreateParkDTO } from '../../dto/CreatePark.dto';
import { CreateParkSlot } from '../../domain/services/CreateParkSlot.service';
import { ListParkSlot } from 'src/domain/services/ListParkSlot.service';

@Controller('parks')
export class ParkSlotController {
  constructor(
    private readonly createParkSlot: CreateParkSlot,
    private readonly listParkSlots: ListParkSlot,
  ) {}

  @Post()
  createPark(@Body() body: CreateParkDTO) {
    this.createParkSlot.handle(body);
    return HttpStatus.NO_CONTENT;
  }

  @Get()
  async listPark() {
    const parkSlots = await this.listParkSlots.handle();
    return parkSlots;
  }
}
