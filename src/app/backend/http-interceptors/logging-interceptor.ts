import { HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  constructor() {}

  /* Requests are logged in the console including the response time. */
  intercept(req: HttpRequest<unknown>, next: HttpHandler) {
    const started: number = Date.now();
    let ok: boolean;
    let messageSummary: string;

    return next.handle(req).pipe(
      tap({
        next: (event) => (ok = event instanceof HttpResponse),
      }),
      finalize(() => {
        if (ok) {
          const elapsed = Date.now() - started;
          messageSummary = `${req.method} "${req.urlWithParams}" ${ok} in ${elapsed} ms.`;
          console.log(messageSummary);
        }
      }),
    );
  }
}
