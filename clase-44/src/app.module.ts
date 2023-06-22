import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { RequestMethod } from '@nestjs/common/enums';
import ExampleMiddleware from './middleware/exampleMiddleware';

//ConfigModule.forRoot() para variables de entorno
@Module({
  //URL de MongoDB Atlas
  imports: [ConfigModule.forRoot(), MongooseModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (config: ConfigService) => ({
      uri: config.get<string>("MONGO_ATLAS_URL")
    })
  }), UsersModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ExampleMiddleware).forRoutes({ path: "*", method: RequestMethod.ALL }) //Aplicar este middleware en todas las rutas con todos los metodos
  }
}
