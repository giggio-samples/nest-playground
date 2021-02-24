import { Injectable } from '@nestjs/common';
import { LibaService  } from '@app/liba';

@Injectable()
export class AppService {
  constructor(private readonly libaService:LibaService ) {}
  getHello(): string {
    return this.libaService.m();
    // return 'Hello World!';
  }
}
