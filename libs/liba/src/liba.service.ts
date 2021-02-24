import { Injectable } from '@nestjs/common';

@Injectable()
export class LibaService {
  m() {
    return "Ola liba";
  }
}
