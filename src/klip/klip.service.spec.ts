import { Test, TestingModule } from '@nestjs/testing';
import { KlipService } from './klip.service';

describe('KlipService', () => {
  let service: KlipService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KlipService],
    }).compile();

    service = module.get<KlipService>(KlipService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
