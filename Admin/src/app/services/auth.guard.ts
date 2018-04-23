import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { AccountService } from './account.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.accountService.isLoggedIn()) {
      return true;
      
    }
    console.log(this.accountService.isLoggedIn);
    this.router.navigate(['/login']);
    return false;
  }
  
}
