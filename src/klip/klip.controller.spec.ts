import { Test, TestingModule } from '@nestjs/testing';
import { KlipController } from './klip.controller';

describe('KlipController', () => {
  let controller: KlipController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KlipController],
    }).compile();

    controller = module.get<KlipController>(KlipController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
