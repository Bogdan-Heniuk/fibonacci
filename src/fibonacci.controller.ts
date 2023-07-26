import { Controller } from '@nestjs/common';
import { FibonacciService } from './fibonacci.service';
import {
  MessagePattern,
  Payload,
} from '@nestjs/microservices';

@Controller()
export class FibonacciController {
  constructor(private readonly fibonacciService: FibonacciService) {}

  @MessagePattern({ cmd: 'calc_fibonacci' })
  async getHello(@Payload() index: string): Promise<any> {
    const result = await this.fibonacciService.calcFibonacci(Number(index));
    return result + " updated!";
  }
}
