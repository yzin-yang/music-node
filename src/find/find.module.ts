import { HttpModule, Module } from '@nestjs/common';
import { FindController } from './find.controller';
import { FindService } from './find.service';

@Module({
  imports: [HttpModule],
  controllers: [FindController],
  providers: [FindService]
})
export class FindModule {}
