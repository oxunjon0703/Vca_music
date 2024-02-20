import { Test, TestingModule } from '@nestjs/testing';
import { DislikesService } from './dislikes.service';

describe('DislikesService', () => {
  let service: DislikesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DislikesService],
    }).compile();

    service = module.get<DislikesService>(DislikesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
