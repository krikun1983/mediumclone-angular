import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';
import { environment } from 'src/environments/environment';
import { RegisterRequestInterface } from 'src/app/auth/types/register-request.interface';
import { AuthResponseInterface } from 'src/app/auth/types/auth-response.interface';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  public register(
    data: RegisterRequestInterface
  ): Observable<CurrentUserInterface> {
    const URL = `${environment.apiBaseUrl}/users`;

    return this.http
      .post<AuthResponseInterface>(URL, data)
      .pipe(map((response: AuthResponseInterface) => response.user));
  }
}
