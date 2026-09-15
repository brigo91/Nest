import { Controller, Module, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getRootRoute(): string {
    return 'Hello World!';
  }
}