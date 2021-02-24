import { Controller, Get } from '@nestjs/common';
import { ModuleaService } from './modulea.service';

@Controller()
export class ModuleaController {
  constructor(private readonly moduleaService: ModuleaService) {}

  @Get()
  getHello(): string {
    return this.moduleaService.getHello();
  }
}
