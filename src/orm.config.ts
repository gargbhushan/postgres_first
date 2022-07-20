import { TypeOrmModuleOptions} from "@nestjs/typeorm";
export const config: TypeOrmModuleOptions={
    type:"postgres",
    username:"postgres",
    password:"password",
    host:"127.0.0.1",
    database:"linkedin",
    synchronize:true,
} 