import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private messageService: MessageService, private zone: NgZone) {}

  handleError(error: any) {
    let messageSummary: string = '';
    let messageDetail: string = '';

    // Assign message content
    messageSummary = error.status ? error.status.toString() : 'Error';
    messageDetail = error.message ? error.message : '';

    // Send message toast
    this.zone.run(() =>
      this.messageService.add({
        severity: 'error',
        summary: messageSummary,
        detail: messageDetail,
      }),
    );

    console.log(error);
  }
}
