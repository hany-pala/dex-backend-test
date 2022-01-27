import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KlipService } from './klip/klip.service';
import { KlipController } from './klip/klip.controller';
import { KlipModule } from './klip/klip.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [KlipModule, AuthModule, UsersModule],
  controllers: [AppController, KlipController],
  providers: [AppService, KlipService],
})
export class AppModule implements NestModule {
  configure(customer: MiddlewareConsumer): any {
    customer.apply(LoggerMiddleware).forRoutes({
      path: 'v1',
      method: RequestMethod.GET,
    });
    // apply(LoggerMiddleware).forRoutes('v1');
  }
}
