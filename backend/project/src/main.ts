import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
// import multipart from '@fastify/multipart';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  app.enableCors({
    origin: true,
    credentials: true,
  });

  // await app.register(multipart, {
  //   limits: {
  //     fileSize: 10 * 1024 * 1024, // 10MB
  //   },
  // });

  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();
