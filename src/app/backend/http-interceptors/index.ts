/* "Barrel" of Http Interceptors */
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BackendInterceptor } from './backend-interceptor';
import { LoggingInterceptor } from './logging-interceptor';
import { NotFoundInterceptor} from './not-found-interceptor';


/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: BackendInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: NotFoundInterceptor, multi: true },
];
