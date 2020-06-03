import { Controller, Get, Param } from '@nestjs/common';

@Controller()
export class AppController {
  
  constructor() {}

  @Get()
  getHello() {
    return { hello: 'world' };
  }
}
