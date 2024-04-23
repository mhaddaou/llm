import { Test, TestingModule } from '@nestjs/testing';
import { ResolversResolver } from './resolvers.resolver';

describe('ResolversResolver', () => {
  let resolver: ResolversResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResolversResolver],
    }).compile();

    resolver = module.get<ResolversResolver>(ResolversResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
