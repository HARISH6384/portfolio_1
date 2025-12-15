import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config'; // Add ConfigModule import
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
// import { ScheduleModule } from '@nestjs/schedule'; 
import { AppService } from './app.service';
import { PortfolioModule } from './module/module'; // Adjust path if needed
import Typeormconfig from './database/typeorm'; // Adjust path to your Typeormconfig file
// import { EmailModule } from './module/email.module';
// import { UploadModule } from './module/upload.module';
// import { BullModule } from '@nestjs/bull';
// import { TaskModule } from './module/task.module';

@Module({
  imports: [
    ConfigModule.forRoot({ // Add this to load env vars (e.g., from .env file)
      isGlobal: true, // Makes ConfigService available app-wide
    }),
   
    // BullModule.forRoot({
    //   redis: {
    //     host: 'localhost',
    //     port: 6379,
    //   },
    // }),


    TypeOrmModule.forRootAsync({
      imports: [ConfigModule ], // Ensure ConfigService is available
      useFactory: (configService: ConfigService) => Typeormconfig.getormconfig(configService),
      inject: [ConfigService],
    }),
      // ScheduleModule.forRoot(), 
      // TaskModule,
    PortfolioModule,
    // EmailModule,
    // UploadModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}