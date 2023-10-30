import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { dataSourceOptions } from 'db/data-source';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:`.${process.env.NODE_ENV}.env`,
      isGlobal: true
    }),
    TypeOrmModule.forRoot(dataSourceOptions),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
