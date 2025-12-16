import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export default class Typeormconfig {
  static getormconfig(
    configservice: ConfigService,
  ): TypeOrmModuleOptions {
    return {
      type: 'postgres',

      // 🔥 USE DATABASE_URL
      url: configservice.get('DATABASE_URL'),

      entities: [__dirname + '/../entities/*.entity{.ts,.js}'],
      synchronize: true,

      ssl: {
        rejectUnauthorized: false,
      },
    };
  }
}
