import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import Createdto from "src/dto/create.dto"; // Adjust path
import { PortfolioService } from "src/service/service"; // Adjust path

@Controller('portfolio')
export class Portfoliocontroller {
  constructor(private readonly portservice: PortfolioService) {}

  @Post()
  create(@Body() dto: Createdto) {
    return this.portservice.create(dto);
  }

  @Get()
  find() {
    return this.portservice.find();
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: Createdto) { // Fixed: Added 'id' to @Param
    return this.portservice.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) { // Fixed: Added 'id' to @Param
    return this.portservice.delete(id);
  }
}