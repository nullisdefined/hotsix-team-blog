import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';
import { Board } from './board.entity';

// 모듈 데코레이션
@Module({
  imports: [TypeOrmModule.forFeature([Board])],
  // 모듈에 등록할 컨트롤러, 프로바이더들을 명시함
  controllers: [BoardsController],
  providers: [BoardsService]
})
export class BoardsModule {}
