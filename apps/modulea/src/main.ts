import { NestFactory } from '@nestjs/core';
import { ModuleaModule } from './modulea.module';

async function bootstrap() {
  const app = await NestFactory.create(ModuleaModule);
  await app.listen(3000);
}
bootstrap();
