import { Component, OnInit } from '@angular/core';

import { LogsService } from './logs.service';
import { Log } from './log';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.less']
})
export class LogsComponent implements OnInit {

  logs: Log[];

  constructor( private logsService: LogsService) {
  }

  ngOnInit() {
    this.getLogs();
  }

  getLogs(): void {
    this.logsService.getLogs().then(logs => this.logs = logs);
  }
}
