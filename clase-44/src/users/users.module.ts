import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User, UserSchema } from './schema/users.schema'
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MongooseModule.forFeature([{ //Implemento el schema y el nombre de mis usuarios
      name: User.name,
      schema: UserSchema
    }])
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule { }
