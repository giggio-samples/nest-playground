import { Injectable } from '@nestjs/common';

@Injectable()
export class ModuleaService {
  getHello(): string {
    return 'Hello World!';
  }
}
