import { Injectable } from '@angular/core';

import { Log } from './log';
import { LOGS } from './mock.logs';

@Injectable()
export class LogsService {
  constructor() {
  }

  getLogs(): Promise<Log[]> {
    return Promise.resolve(LOGS);
  }

}
