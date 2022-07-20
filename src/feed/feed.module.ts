import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedController } from './controllers/feed.controller';
import { FeedService } from './service/feed.service';
import { FeedPostEntity } from './service/models/post.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([FeedPostEntity])
  ],
  controllers:[FeedController],
  providers: [FeedService]
})
export class FeedModule {}
