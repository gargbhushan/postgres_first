import{Entity,Column,PrimaryGeneratedColumn} from "typeorm"
@Entity("feed_post")
export class FeedPostEntity{
    @PrimaryGeneratedColumn()
    id: number;  
   @Column({default : ""})
    Name : string;
    @Column({default : ""})
    Surname : string;
    @Column({default:""})
    Email:string;
  
    @Column({type:"timestamp",default:()=>"CURRENT_TIMESTAMP"})
    createdAT:Date;
  

}