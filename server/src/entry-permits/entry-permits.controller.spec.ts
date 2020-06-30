import { Test, TestingModule } from '@nestjs/testing';
import { EntryPermitsController } from './entry-permits.controller';

describe('EntryPermits Controller', () => {
  let controller: EntryPermitsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EntryPermitsController],
    }).compile();

    controller = module.get<EntryPermitsController>(EntryPermitsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
