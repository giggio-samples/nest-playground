import { Module } from '@nestjs/common';
import { LibaService } from './liba.service';

@Module({
  providers: [LibaService],
  exports: [LibaService],
})
export class LibaModule {}
