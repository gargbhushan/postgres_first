import { Controller,Post,Get, Body } from '@nestjs/common';
import { Observable } from 'rxjs/internal/Observable';
import { FeedService } from '../service/feed.service';
import { FeedPost } from '../service/models/post.interface';

@Controller('feed')
export class FeedController {
    constructor(private feedService:FeedService){}
    @Post()
    create(@Body()post:FeedPost): Observable<FeedPost>{
        return this.feedService.createPost(post)       
    }
    @Get()
    findAll():Observable<FeedPost[]>{
        return this.feedService.FindAllPosts();

    }
}
