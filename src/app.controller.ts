import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // async getHello(): Promise<User[]> {
  //   const a = await this.appService.getUser();
  //   console.log(a);
  //   return a;
  // }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
