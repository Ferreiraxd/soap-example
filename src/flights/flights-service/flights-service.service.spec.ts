import { Test, TestingModule } from '@nestjs/testing';
import { FlightsServiceService } from './flights-service.service';

describe('FlightsServiceService', () => {
  let service: FlightsServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FlightsServiceService],
    }).compile();

    service = module.get<FlightsServiceService>(FlightsServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
