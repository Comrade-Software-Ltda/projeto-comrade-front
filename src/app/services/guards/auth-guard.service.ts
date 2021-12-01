import { Injectable, OnDestroy } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, OnDestroy {
  constructor(private router: Router) {}

  subscriptions = new Subscription();

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!environment.disablePermissions) {
      const token = localStorage.getItem('comradeToken');

      if (token) {
        return true;
      } else {
        this.router.navigate(['/auth']);
        return false;
      }
    }

    return true;
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
