import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { MessageService } from 'primeng/api';

@Injectable()
export class NotFoundInterceptor implements HttpInterceptor {
  constructor(private router: Router, private messageService: MessageService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        this.messageService.add({
          severity: 'warn',
          summary: error.status.toString(),
          detail: error.message,
        });
        if (error.status === 404) {
          console.log('Error 404: redirecting...');
          this.router.navigate(['/404']);
        } else {
          console.log('Error caught!');
        }
        return throwError(error);
      }),
    );
  }
}
