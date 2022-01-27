import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  Param,
  Post,
  SetMetadata,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { KlipService } from './klip.service';
import { ValidationPipe } from '../pipe/validation.pipe';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CreateUserKlipDto } from './dto/user.dto';
import { JoiValidationPipe } from '../pipe/joi.validation.pipe';
import { userSchema } from './schema/user.schema';
import { adminSchema } from './schema/admin.schema';
import { CreateAdminKlipDto } from './dto/admin.dto';
import { Roles } from '../roles/roles.decorator';
import { LoggingInterceptor } from '../interceptors/logging.inerceptor';

@Controller('/v1/klip')
@UseInterceptors(LoggingInterceptor)
export class KlipController {
  constructor(private klipService: KlipService) {}

  @Get('tx-receipt/:tx')
  getTxReceipt(
    @Param('tx', ValidationPipe)
    txHash: string,
  ) {
    // @TODO check parameter
    console.log('txHash: ', txHash);

    // @TODO doing service logic
    return this.klipService.getTransactionReceipt(txHash);
  }

  @Get('tx-fail/:id')
  // @UseFilters(new HttpExceptionFilter())
  getFailTest() {
    throw new ForbiddenException();
  }

  @Post('tx-create')
  @UsePipes(new JoiValidationPipe(userSchema))
  @Roles('admin')
  createKlip(@Body() CreateUserKlipDto: CreateUserKlipDto) {
    console.log(12341414, CreateUserKlipDto);
  }

  @Post('tx-create-admin')
  createKlipFromAdmin(@Body() CreateAdminKlipDto: CreateAdminKlipDto) {
    console.log(123123123, CreateAdminKlipDto);
  }
}
