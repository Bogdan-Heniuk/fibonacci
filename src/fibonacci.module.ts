import { Module } from '@nestjs/common';
import { FibonacciController } from './fibonacci.controller';
import { FibonacciService } from './fibonacci.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
  ],
  controllers: [FibonacciController],
  providers: [FibonacciService],
})
export class FibonacciModule {}
