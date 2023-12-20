import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { CreateParkDTO } from '../../dto/CreatePark.dto';
import { CreateParkSlot } from '../../domain/services/CreateParkSlot.service';
import { ListParkSlot } from 'src/domain/services/ListParkSlot.service';
import { DeleteParkSlot } from 'src/domain/services/DeleteParkSlot.service';

@Controller('parks')
export class ParkSlotController {
  constructor(
    private readonly createParkSlot: CreateParkSlot,
    private readonly listParkSlots: ListParkSlot,
    private readonly deleteParkSlot: DeleteParkSlot,
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

  @Delete('/:id')
  async deletePark(@Param('id') id: string) {
    try {
      await this.deleteParkSlot.deleteParkById(id);
      return HttpStatus.NO_CONTENT;
    } catch (error) {
      console.error('Erreur lors de la suppression du parkSlot : ', error);
    }
  }
}
