import { Injectable, OnDestroy } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, OnDestroy {
  constructor(private router: Router) {}

  subscriptions = new Subscription();

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!environment.disablePermissions) {
      const tokenPermissao = localStorage.getItem('kpmgPermissaoToken');

      if (tokenPermissao) {
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
