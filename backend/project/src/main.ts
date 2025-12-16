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
   
  const port = process.env.PORT || 5000;
 await app.listen(port, '0.0.0.0');

  console.log(`Server running on port ${port}`);
}
bootstrap();
