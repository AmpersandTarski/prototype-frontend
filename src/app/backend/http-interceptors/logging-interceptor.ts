import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { finalize, tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  constructor(private messageService: MessageService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler) {
    const started: number = Date.now();
    let ok: string;
    let severity: string;
    let messageSummary: string;
    let messageDetails: string;

    // extend server response observable with logging
    return next.handle(req).pipe(
      tap({
        // Succeeds when there is a response; ignore other events
        next: (event) => ((ok = event instanceof HttpResponse ? 'succeeded' : ''), (severity = 'success')),
        // Operation failed; error is an HttpErrorResponse
        error: (error: HttpErrorResponse) => ((ok = 'failed'), (severity = 'error'), (messageDetails = error.message)),
      }),
      // Log when response observable either completes or errors
      finalize(() => {
        const elapsed = Date.now() - started;
        if (!messageDetails) {
          messageSummary = `${req.method} "${req.urlWithParams}" ${ok} in ${elapsed} ms.`;
        }
        console.log(messageSummary);

        this.messageService.add({
          severity: severity,
          summary: messageSummary ? messageSummary : undefined,
          detail: messageDetails ? messageDetails : undefined,
        });
      }),
    );
  }
}
