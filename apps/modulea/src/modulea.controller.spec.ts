import { Test, TestingModule } from '@nestjs/testing';
import { ModuleaController } from './modulea.controller';
import { ModuleaService } from './modulea.service';

describe('ModuleaController', () => {
  let moduleaController: ModuleaController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ModuleaController],
      providers: [ModuleaService],
    }).compile();

    moduleaController = app.get<ModuleaController>(ModuleaController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(moduleaController.getHello()).toBe('Hello World!');
    });
  });
});
