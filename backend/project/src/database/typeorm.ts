import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
export default class Typeormconfig {
  static getormconfig(configservice: ConfigService): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: configservice.get<string>('DB_HOST') || 'localhost',
      port: parseInt(configservice.get<string>('DB_PORT') || '5432'),
      username: configservice.get<string>('DB_USER') || 'postgres',
      password: configservice.get<string>('DB_PASSWORD') || '',
      database: configservice.get<string>('DB_NAME') || 'testdb',
      entities: [__dirname + '/../entities/*.entity{.ts,.js}'],
      synchronize: true,
      logging: false,
    };
  }

}
