import { Injectable } from '@nestjs/common';
import { loop } from './bill/bill'
@Injectable()
export class AppService {
  getHello(): string {
    loop()
    return 'Hello World!';
    
  }
}
