import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class AppService {
  // constructor(
  //   @InjectRepository(User) public appRepository: Repository<User>,
  // ) {}

  getHello(): string {
    return 'Hello World!';
  }

  // getUser(): Promise<User[]> {
  //   return this.appRepository.find();
  // }
}
