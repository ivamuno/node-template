import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiNoContentResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { AppDto } from './app.dto';
import { AppModel } from './app.model';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  @ApiOperation({ summary: 'Get App' })
  @ApiOkResponse({ type: AppDto })
  @ApiNotFoundResponse({ description: 'Not found' })
  get(@Param('id') id: string): AppDto {
    return this.mapToDto(this.appService.read(id));
  }

  @Post()
  @ApiOperation({ summary: 'Create App' })
  @ApiNoContentResponse()
  post(@Param('appDto') dto: AppDto): void {
    this.appService.create(this.mapFromDto(dto));
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete App' })
  @ApiNoContentResponse()
  delete(@Param('key') key: string): void {
    this.appService.delete(key);
  }

  private mapFromDto(dto: AppDto): AppModel {
    return Object.assign({}, dto);
  }

  private mapToDto(model: AppModel): AppDto {
    return Object.assign({}, model);
  }
}
