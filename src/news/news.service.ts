import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import  { Model } from 'mongoose';
import { CreateNewsDto } from './dto/create-news.dto';
import { News, NewsDocument } from './schemas/news.schema';
import { UpdateNewsDto } from './dto/update-news.dto';

@Injectable()
export class NewsService {
  constructor(@InjectModel(News.name) private newsModel: Model<NewsDocument>) {
  }

  async getAll(): Promise<News[]> {
    return await this.newsModel.find().exec()
  }

  async getById(id: string): Promise<News> {
    return this.newsModel.findById(id)
  }

  async create(createNewsDto: CreateNewsDto): Promise<News> {
    const newNews = new this.newsModel(createNewsDto)
    return newNews.save()
  }

  async remove(id: string): Promise<News> {
    return this.newsModel.findByIdAndRemove(id)
  }

  async update(id: string, updateNewsDto: UpdateNewsDto): Promise<News> {
    return this.newsModel.findByIdAndUpdate(id, updateNewsDto, {new: true})
  }
}