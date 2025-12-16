import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Portfolio } from '../entities/portfolio.entity';
import Createdto from '../dto/create.dto';

@Injectable()
export class PortfolioService {
  constructor(
    @InjectRepository(Portfolio)
    private readonly portfolioRepo: Repository<Portfolio>,
  ) {}

  create(dto: Createdto) {
    return this.portfolioRepo.save(this.portfolioRepo.create(dto));
  }

  find() {
    return this.portfolioRepo.find();
  }

  update(id: number, dto: Createdto) {
    return this.portfolioRepo.update(id, dto);
  }

  delete(id: number) {
    return this.portfolioRepo.delete(id);
  }
}
