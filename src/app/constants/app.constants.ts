import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export const URL: any = {
  // API: environment.URL
};

export const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

export class AppConstants {
  public static get baseURL(): string {
    return 'http://localhost:4200/api';
  }
  public static get httpError(): string {
    return 'There was an HTTP error.';
  }
  public static get typeError(): string {
    return 'There was a Type error.';
  }
  public static get generalError(): string {
    return 'There was a general error.';
  }
  public static get somethingHappened(): string {
    return 'Nobody threw an Error but something happened!';
  }
}

export class AppConfig {
  public static InfoMessageRunTimeConfigs =
    'runtime configurations not found, using compile time configurations';

}
