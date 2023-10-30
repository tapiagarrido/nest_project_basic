import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as morgan from 'morgan'
import { CORS } from './constants';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // morgan nos permite ver los logs en este caso en caso de que estemos en ambiente de produccion
  app.use(morgan('dev'));

  app.useGlobalPipes(new ValidationPipe({
    transformOptions:{
      enableImplicitConversion:true,
    }
  }))

  const configService = app.get(ConfigService);

  app.enableCors(CORS)

  // le indicamos el prfijo del endpoint, para que siempre inicie con api/
  app.setGlobalPrefix("api");

  await app.listen(configService.get("PORT"));

  console.log(`Aplicattion runnig at: ${await app.getUrl()} `)
}
bootstrap();
