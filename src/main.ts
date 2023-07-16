import { NestFactory } from '@nestjs/core';
import { FibonacciModule } from './fibonacci.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(FibonacciModule);

  await app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://rabbitmq'],
      queue: 'fibonacci_queue',
      queueOptions: {
        durable: false
      },
    },
  });

  app.startAllMicroservices()
}
bootstrap();
