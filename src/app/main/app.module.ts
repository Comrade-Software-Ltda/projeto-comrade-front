import { ErrorHandler, NgModule } from '@angular/core';
import {
  PathLocationStrategy,
  LocationStrategy,
  APP_BASE_HREF,
  PlatformLocation,
  CommonModule
} from '@angular/common';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthenticationWebRepository } from '../data/repository/authentication-web-reporitory/authentication-web.repository';
import { AuthenticationRepository } from '../core/repositories/authentication.repository';
import { TokenWebRepository } from '../data/repository/token-web-reporitory/token-web.repository';
import { TokenRepository } from '../core/repositories/token.repository';
import { SystemUserLookupRepository } from '../core/lookups/ba-usu-lookup/system-user-lookup.repository';
import { SystemUserLookupWebRepository } from '../data/lookup-repository/System-User-lookup-web.repository';
import { SystemPermissionLookupRepository } from '../core/lookups/ba-usu-lookup/system-permission-lookup.repository';
import { SystemPermissionLookupWebRepository } from '../data/lookup-repository/System-Permission-lookup-web.repository';
import { RoleLookupRepository } from '../core/lookups/ba-usu-lookup/role-lookup.repository';
import { RoleLookupWebRepository } from '../data/lookup-repository/Role-lookup-web.repository';
import { AirplaneRepository } from '../core/repositories/airplane.repository';
import { AirplaneWebRepository } from '../data/repository/airplane-web-repository/airplane-web.repository';
import { ComradeTokenRepository } from '../core/repositories/comrade-token.repository';
import { UnauthenticatedContentModule } from './unauthenticated-content';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService, ScreenService, AppInfoService } from '../services';
import {
  FooterModule,
  ResetPasswordFormModule,
  CreateAccountFormModule,
  ChangePasswordFormModule,
  LoginFormModule,
} from '../view/components';
import {
  SideNavOuterToolbarModule,
  SideNavInnerToolbarModule,
  SingleCardModule,
} from '../view/layouts';
import { GlobalErrorHandlerService } from '../services/handlers/global-error-handler.service';
import { AuthInterceptor } from '../services/interceptors/auth.interceptor';
import { SystemUserRepository } from '../core/repositories/system-user.repository';
import { SystemUserWebRepository } from '../data/repository/system-user-web-repository/system-user-web.repository';
import { SystemPermissionRepository } from '../core/repositories/system-permission.repository';
import { SystemPermissionWebRepository } from '../data/repository/system-permission-web-repository/system-permission-web.repository';
import { RoleRepository } from '../core/repositories/role.repository';
import { RoleWebRepository } from '../data/repository/role-web-repository/role-web.repository';
export function getBaseHref(platformLocation: PlatformLocation): string {
  return platformLocation.getBaseHrefFromDOM();
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    ResetPasswordFormModule,
    CreateAccountFormModule,
    ChangePasswordFormModule,
    LoginFormModule,
    UnauthenticatedContentModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
    ScreenService,
    AppInfoService,
    {
      provide: APP_BASE_HREF,
      useFactory: getBaseHref,
      deps: [PlatformLocation],
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService },
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    { provide: AirplaneRepository, useClass: AirplaneWebRepository },
    { provide: SystemUserRepository, useClass: SystemUserWebRepository },
    { provide: SystemPermissionRepository, useClass: SystemPermissionWebRepository },
    { provide: RoleRepository, useClass: RoleWebRepository },
    { provide: AuthenticationRepository, useClass: AuthenticationWebRepository },
    { provide: TokenRepository, useClass: TokenWebRepository },
    { provide: SystemUserLookupRepository, useClass: SystemUserLookupWebRepository },
    { provide: SystemPermissionLookupRepository, useClass: SystemPermissionLookupWebRepository },
    { provide: RoleLookupRepository, useClass: RoleLookupWebRepository },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
