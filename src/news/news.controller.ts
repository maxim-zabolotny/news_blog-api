import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { NewsService } from './news.service';
import { News } from './schemas/news.schema';

@Controller('news')
export class NewsController {

  constructor(private readonly newsService: NewsService) {
  }

  @Get()
  getAll(): Promise<News[]> {
    console.log(1111)
    return this.newsService.getAll()
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<News> {
    return this.newsService.getById(id)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createNewsDto: CreateNewsDto): Promise<News> {
    return this.newsService.create(createNewsDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<News> {
    return this.newsService.remove(id)
  }

  @Put(':id')
  update(@Body() updateNewsDto: UpdateNewsDto, @Param('id') id: string): Promise<News> {
    return this.newsService.update(id, updateNewsDto)
  }

}
