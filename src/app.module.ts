import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NewsModule } from './news/news.module';

@Module({
  imports: [
    NewsModule,
    MongooseModule.forRoot(`mongodb+srv://user:user@cluster0.3balk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
