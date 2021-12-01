import { ErrorHandler, NgModule } from '@angular/core';
import {
  PathLocationStrategy,
  LocationStrategy,
  APP_BASE_HREF,
  PlatformLocation,
} from '@angular/common';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../services/auth-interceptor/auth.interceptor';
import { GlobalErrorHandlerService } from '../services/error-handler/global-error-handler.service';
import { AuthenticationWebRepository } from '../data/repository/authentication-web-reporitory/authentication-web.repository';
import { AuthenticationRepository } from '../core/repositories/authentication.repository';
import { TokenWebRepository } from '../data/repository/token-web-reporitory/token-web.repository';
import { TokenRepository } from '../core/repositories/token.repository';
import { SystemUserLookupRepository } from '../core/lookups/usuario-sistema-lookup.repository';
import { SystemUserLookupWebRepository } from '../data/lookup-repository/usuario-sistema-lookup-web.repository';
import { AirplaneRepository } from '../core/repositories/airplane.repository';
import { AirplaneWebRepository } from '../data/repository/airplane-web-repository/airplane-web.repository';
import { ComradeTokenRepository } from '../core/repositories/comrade-token.repository';
import { ComradeTokenWebRepository } from '../data/repository/comrade-token-web-repository/comrade-token-web.repository';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from '../layouts';
import { UnauthenticatedContentModule } from './unauthenticated-content';
import { BrowserModule } from '@angular/platform-browser';
import {
  FooterModule,
  ResetPasswordFormModule,
  CreateAccountFormModule,
  ChangePasswordFormModule,
  LoginFormModule,
} from '../components';
import { AuthService, ScreenService, AppInfoService } from '../services';

export function getBaseHref(platformLocation: PlatformLocation): string {
  return platformLocation.getBaseHrefFromDOM();
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
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
    { provide: AuthenticationRepository, useClass: AuthenticationWebRepository },
    { provide: ComradeTokenRepository, useClass: ComradeTokenWebRepository },
    { provide: TokenRepository, useClass: TokenWebRepository },
    { provide: SystemUserLookupRepository, useClass: SystemUserLookupWebRepository },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
