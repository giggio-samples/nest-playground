import { LibaService } from '@app/liba';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly libaService: LibaService) {}
  getHello(): string {
    return this.libaService.m();
  }
}
