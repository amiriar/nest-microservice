import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger';
import { BookstoreApiGatewayModule } from './bookstore-api-gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(BookstoreApiGatewayModule);

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('Microservice API')
    .setDescription('API documentation for the microservice')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
}
bootstrap();
