import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  deleteOrder(): string {
    return 'Succesful';
  }
  updateOrder(): string {
    return 'Succesful';
  }
  createOrder(): string {
    return 'Succesful';
  }
  getOrder(): string {
    return 'Succesful';
  }
}
