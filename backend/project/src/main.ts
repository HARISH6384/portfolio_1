import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  app.enableCors({
    origin:  ["https://portfolio-1-u4v7.vercel.app","http://localhost:3000"],
    credentials: true,
  });

  const port = Number(process.env.PORT) || 5000;

  await app.listen({
    port,
    host: '0.0.0.0',
  });

  console.log(`🚀 Server running on port ${port}`);
}

bootstrap();
