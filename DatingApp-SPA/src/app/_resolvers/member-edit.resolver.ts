import { AuthService } from './../services/auth.service';
import { AlertifyService } from '../services/alertify.service';
import { UserService } from '../services/user.service';
import { User } from 'src/app/_models/user';
import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { of, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class MemberEditResolver implements Resolve<User> {

  constructor(private userService: UserService, private router: Router, private alertify: AlertifyService,
              private authService: AuthService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    console.log(this.authService.decodedToken.nameid);
    return this.userService.getUser(this.authService.decodedToken.nameid).pipe(
      catchError(error => {
        this.alertify.error('Problem retrieving your data');
        this.router.navigate(['/members']);
        return of(null);
      })
    );
  }
}
