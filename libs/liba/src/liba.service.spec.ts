import { Test, TestingModule } from '@nestjs/testing';
import { LibaService } from './liba.service';

describe('LibaService', () => {
  let service: LibaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LibaService],
    }).compile();

    service = module.get<LibaService>(LibaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
