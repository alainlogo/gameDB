import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'x-rapidapi-key': 'fc8fddeafbmshe4e60c2a78eabf9p11f18ejsn7909f55f9471',
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
      },
      setParams: {
        // pour cette key y fait aller sur le site de rawg
        key: 'bc2988fa3f7342c29b4fec1b7d86cf76',
      }
    });
    return next.handle(req);
  }
}
