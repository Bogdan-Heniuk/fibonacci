import { Injectable } from '@nestjs/common';

@Injectable()
export class FibonacciService {
  calcFibonacci(index: number): number {
    if (index < 2) {
      return index;
    }

    return this.calcFibonacci(index - 1) + this.calcFibonacci(index - 2);
  }
}
