import { Module } from '@nestjs/common';
import { ModuleaController } from './modulea.controller';
import { ModuleaService } from './modulea.service';

@Module({
  imports: [],
  controllers: [ModuleaController],
  providers: [ModuleaService],
})
export class ModuleaModule {}
