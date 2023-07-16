import { Injectable } from '@nestjs/common';

@Injectable()
export class FibonacciService {
  calcFibonacci(index: number): number {
    let a = 0,
      b = 1,
      c = index;

    for (let i = 2; i <= index; i++) {
      c = a + b;
      a = b;
      b = c;
    }

    return c;
  }
}
