import { HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { finalize, tap } from 'rxjs/operators';
import { Notifications } from 'src/app/shared/interfacing/notifications.interface';
import { PatchResponse } from 'src/app/shared/interfacing/patch-response.interface';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  constructor(private messageService: MessageService) {}

  /**
   * Logs requests in the console including the response time.
   * If a PatchResponse is returned with notifications, the notifications are shown to the user.
   */
  intercept(req: HttpRequest<unknown>, next: HttpHandler) {
    const started: number = Date.now();
    let responseIsOk: boolean;
    let messageSummary: string;
    let patchResponse: PatchResponse<JSON>;
    let notifications: Notifications;

    return next.handle(req).pipe(
      tap({
        next: (response) => {
          if (response instanceof HttpResponse) {
            responseIsOk = true;
            patchResponse = response.body as PatchResponse<JSON>;
            notifications = patchResponse.notifications ? patchResponse.notifications : response.body;
          }
        },
      }),
      finalize(async () => {
        if (responseIsOk) {
          const elapsed = Date.now() - started;
          messageSummary = `${req.method} "${req.urlWithParams}" ${
            responseIsOk ? 'finished' : 'failed'
          } in ${elapsed} ms.`;
          console.log(messageSummary);

          // If notifications have been found, the error field exists (possibly with empty array, but it exists)
          if (notifications.errors) this.sendMessagesFromNotifications(notifications);
          if (patchResponse.sessionRefreshAdvice) {
            // clear session storage and reload page
            sessionStorage.clear();
            await new Promise((f) => setTimeout(f, 4000));
            window.location.reload();
          }
        }
      }),
    );
  }

  private sendMessagesFromNotifications(notifications: Notifications) {
    notifications.errors.forEach((field) => this.sendMessage('error', field.message, field.details));
    notifications.warnings.forEach((field) => this.sendMessage('warn', field.message));
    notifications.infos.forEach((field) => this.sendMessage('info', field.message));
    notifications.successes.forEach((field) => this.sendMessage('success', field.message));

    notifications.invariants.forEach((field) => {
      let violationMessages = '';
      field.tuples.forEach((tuple) => {
        violationMessages += tuple.violationMessage + '\n';
      });
      this.sendMessage('error', field.ruleMessage, violationMessages);
    });

    notifications.signals.forEach((field) => {
      let violationMessages = '';
      field.violations.forEach((violation) => {
        violationMessages += violation.message + '\n';
        // TODO: Add ifcs?
      });
      this.sendMessage('info', field.message);
    });
  }

  private sendMessage(severity: string, message: string, details?: string) {
    console.log('sendMessage called with message: ' + message);
    this.messageService.add({
      severity: severity,
      summary: message,
      detail: details,
      life: 7000,
    });
  }
}
