import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LibaModule } from '@app/liba';

@Module({
  imports: [LibaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
