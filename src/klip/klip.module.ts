import { Module } from '@nestjs/common';
import { KlipService } from './klip.service';
import { KlipController } from './klip.controller';

@Module({
  controllers: [KlipController],
  providers: [KlipService],
})
export class KlipModule {}
