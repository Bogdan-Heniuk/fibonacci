import { NestFactory } from '@nestjs/core';
import { FibonacciModule } from './fibonacci.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(FibonacciModule);
  const configService = app.get(ConfigService);

  await app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [configService.get<string>('RMQ_URL')],
      queue: configService.get<string>('RMQ_FIBONACCI_QUEUE'),
      queueOptions: {
        durable: false,
      },
    },
  });

  app.startAllMicroservices();
}
bootstrap();
