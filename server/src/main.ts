import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { RedocOptions, RedocModule } from 'nestjs-redoc';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder().setTitle('Look, i have a title').setDescription('A very nice description').build();
  const document = SwaggerModule.createDocument(app, options);
  const redocOptions: RedocOptions = {
    title: 'Hello Nest',
    sortPropsAlphabetically: true,
    hideDownloadButton: false,
    hideHostname: false,
  };
  await SwaggerModule.setup('/swagger', app, document);
  await RedocModule.setup('/docs', app, document, redocOptions);

  await app.listen(3000);
}
bootstrap();
