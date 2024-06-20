import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board.status.enum';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';
import { NotFoundError } from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BoardRepository } from './board.repository';
import { Board } from './board.entity';
import { typeORMConfig } from 'src/configs/typeorm.config';

@Injectable()
export class BoardsService {
    constructor(
        @InjectRepository(Board)
        private boardRepository: BoardRepository,
    ) {}

    async getBoardById(id: number): Promise<Board> {
        const found = await this.boardRepository.findOneBy({id});

        if (!found) {
            throw new NotFoundException(`${id}는 없는 게시물 id 입니다.`);
        }

        return found;
    }

    // constructor(
    //     @InjectRepository(Cat)
    //     private catRepository: Repository<Cat>
    // ) {}
    // Board에 대한 모델을 인터페이스로 작성했으며 boards 배열에 담길 타입을 인터페이스로 명시
    // 하나의 변수가 아니라 여러개의 배열이기 때문에 Board 배열로 지정

    // 리턴값의 타입 지정
    // getAllBoards(): Board[] {
    //     return this.boards;
    // }

    // createBoard(createBoardDto: CreateBoardDto): Board {
    //     const { title, description } = createBoardDto;
    //     const board: Board = {
    //         id: uuid(),
    //         title,  // title: title과 동일한 문장 
    //         description,
    //         status: BoardStatus.PUBLIC
    //     }
    //     this.boards.push(board);
    //     return board;
    // }

    // getBoardById(id: string): Board {
    //     const found = this.boards.find((board) => board.id === id);
    //     if(!found) {
    //         throw new NotFoundException(`${id}는 없는 게시물 id 입니다.`);
    //     }
    //     return found;
    // }

    // deleteBoard(id: string): void { // 리턴값이 없을경우 void로 명시
    //     this.getBoardById(id);
    //     this.boards = this.boards.filter((board) => board.id !== id);
    // }

    // updateBoardStatus(id: string, status: BoardStatus): Board {
    //     const board = this.getBoardById(id);
    //     board.status = status;
    //     return board;
    // }
}