import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'Blog',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  // entities: [User],
  synchronize: true,
};
