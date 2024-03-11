import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getOrder(): string {
    return this.appService.getOrder();
  }

  @Post()
  createOrder(): string {
    return this.appService.createOrder();
  }

  @Put()
  updateOrder(): string {
    return this.appService.updateOrder();
  }

  @Delete()
  deleteOrder(): string {
    return this.appService.deleteOrder();
  }
}
