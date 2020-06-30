import { Test, TestingModule } from '@nestjs/testing';
import { EntryPermitsService } from './entry-permits.service';

describe('EntryPermitsService', () => {
  let service: EntryPermitsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EntryPermitsService],
    }).compile();

    service = module.get<EntryPermitsService>(EntryPermitsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
