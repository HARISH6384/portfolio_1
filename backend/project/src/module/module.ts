import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Portfoliocontroller } from "src/controller/controller";
import { Portfolio } from "src/entities/portfolio.entity";
 
import { PortfolioService } from "src/service/service";

 
@Module({
  imports: [TypeOrmModule.forFeature([Portfolio])],
  controllers: [Portfoliocontroller],
  providers: [PortfolioService],
})
export class PortfolioModule {}