import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardStatus } from './board.status.enum';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';
import { Board } from './board.entity';

@Controller('/boards')  // 컨트롤러 데코레이션과 라우팅 주소를 명시
export class BoardsController {
    constructor(private boardsService: BoardsService) { }   // 접근 제어자를 사용하여 필드 초기화 문장을 생략함

    @Get('/:id')
    getBoardById(@Param('id') id: number): Promise<Board> {
        return this.boardsService.getBoardById(id);
    }

    // @Get('/')   // HTTP 요청 메서드(GET, POST, DELETE 등)
    // getAllBoards(): Board[] {    // 핸들러 함수, 타입을 정의해주는건 선택사항이지만 타입을 명시해줌으로써 가독성 증가, 다른 타입이 오면 에러발생
    //     return this.boardsService.getAllBoards();   // 등록해놓은 서비스에서 요청을 처리함
    // }

    // @Post('/')
    // @UsePipes(ValidationPipe)
    // createBoard(
    //     @Body() createBoardDto: CreateBoardDto
    // ): Board {
    //     return this.boardsService.createBoard(createBoardDto);
    // }

    // @Get('/:id')
    // getBoardById(@Param('id') id: string): Board {
    //     return this.boardsService.getBoardById(id);
    // }

    // @Delete('/:id')
    // deleteBoard(@Param('id') id: string): void {
    //     this.boardsService.deleteBoard(id);
    // }

    // @Patch('/:id/status')
    // updateBoardStatus(
    //     @Param('id') id: string,
    //     @Body('status', BoardStatusValidationPipe) status: BoardStatus
    // ): Board {
    //     return this.boardsService.updateBoardStatus(id, status);
    // }
}
