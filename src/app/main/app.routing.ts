import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuardService } from '../services';
import { AuthGuard } from '../services/guards/auth-guard.service';
import {
  LoginFormComponent,
  ResetPasswordFormComponent,
  CreateAccountFormComponent,
  ChangePasswordFormComponent,
} from '../view/components';

const routes: Routes = [
  {
    path: 'task',
    loadChildren: () => import('../view/pages/task/task.module').then((m) => m.TaskModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    loadChildren: () => import('../view/pages/profile/profile.module').then((m) => m.ProfileModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'home',
    loadChildren: () => import('../view/pages/home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'airplane',
    loadChildren: () =>
      import('../view/pages/airplane/airplane.module').then((m) => m.AirplaneModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'role',
    loadChildren: () =>
      import('../view/pages/role/role.module').then((m) => m.RoleModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'role-system-user',
    loadChildren: () =>
      import('../view/pages/role-system-user/role-system-user.module').then((m) => m.SystemUserModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'system-user',
    loadChildren: () =>
      import('../view/pages/system-user/system-user.module').then((m) => m.SystemUserModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'system-permission',
    loadChildren: () =>
      import('../view/pages/system-permission/system-permission.module').then((m) => m.SystemPermissionModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'reset-password',
    component: ResetPasswordFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'create-account',
    component: CreateAccountFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'change-password/:recoveryCode',
    component: ChangePasswordFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
