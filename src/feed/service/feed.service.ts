import { Injectable } from '@nestjs/common';
import { FeedPostEntity } from './models/post.entity';
import{Repository} from "typeorm";
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { FeedPost } from './models/post.interface';

@Injectable()
export class FeedService {
    constructor(
        @InjectRepository(FeedPostEntity)
        private readonly feedPostRepository : Repository<FeedPostEntity>
    ){}
    createPost(feedPost:FeedPost): Observable<FeedPost>{
        return from(this.feedPostRepository.save(feedPost));
    }
    FindAllPosts():Observable<FeedPost[]>{
        return from(this.feedPostRepository.find());
    }
}
