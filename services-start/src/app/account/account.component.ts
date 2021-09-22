import { Component, Input } from '@angular/core';

import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.services';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService, AccountsService]
})

export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor (private loggingService: LoggingService, private accountsService: AccountsService) {}

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status)
    this.accountsService.statusUpdated.emit(status);
    // this.statusChanged.emit({id: this.id, newStatus: status});

    //this line below replaces the console log below it
    // this.loggingService.logStatusChange(status)
    // console.log('A server status changed, new status: ' + status);
  }
}
