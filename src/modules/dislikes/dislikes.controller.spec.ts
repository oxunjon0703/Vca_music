import { Test, TestingModule } from '@nestjs/testing';
import { DislikesController } from './dislikes.controller';
import { DislikesService } from './dislikes.service';

describe('DislikesController', () => {
  let controller: DislikesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DislikesController],
      providers: [DislikesService],
    }).compile();

    controller = module.get<DislikesController>(DislikesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
